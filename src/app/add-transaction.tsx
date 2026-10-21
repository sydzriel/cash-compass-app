import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function AddTransactionScreen() {
  const router = useRouter();
  const [type, setType] = useState<'expense' | 'income'>('expense');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food & Drinks');

  const handleSave = () => {
    // Local storage save logic will be placed here
    alert(`Saved: ${title} - RM${amount}`);
    router.back();
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Top Navigation / Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backBtn}>‹ Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add Record</Text>
        <TouchableOpacity onPress={handleSave}>
          <Text style={styles.saveBtn}>Save</Text>
        </TouchableOpacity>
      </View>

      {/* Switcher: Expense vs Income */}
      <View style={styles.typeSelector}>
        <TouchableOpacity
          style={[styles.typeBtn, type === 'expense' && styles.typeBtnActive]}
          onPress={() => setType('expense')}
        >
          <Text style={[styles.typeText, type === 'expense' && styles.typeTextActive]}>Expenses</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.typeBtn, type === 'income' && styles.typeBtnActive]}
          onPress={() => setType('income')}
        >
          <Text style={[styles.typeText, type === 'income' && styles.typeTextActive]}>Income</Text>
        </TouchableOpacity>
      </View>

      {/* Amount Input */}
      <View style={styles.inputCard}>
        <Text style={styles.label}>Amount (RM)</Text>
        <TextInput
          style={styles.amountInput}
          placeholder="0.00"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />
      </View>

      {/* Transaction Title Input */}
      <View style={styles.inputCard}>
        <Text style={styles.label}>Transaction Title / Note</Text>
        <TextInput
          style={styles.input}
          placeholder="E.g. Rice, Zus Coffee"
          value={title}
          onChangeText={setTitle}
        />
      </View>

      {/* Category Selection */}
      <Text style={styles.sectionTitle}>Select Category</Text>
      <View style={styles.categoryGrid}>
        {['🍔 Food', '🚗 Transport', '🛍️ Shopping', '🏠 Rent', '💡 Bills', '🎓 Education'].map((cat, idx) => (
          <TouchableOpacity
            key={idx}
            style={[styles.catBadge, category === cat && styles.catBadgeActive]}
            onPress={() => setCategory(cat)}
          >
            <Text style={[styles.catText, category === cat && styles.catTextActive]}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F6F6F6' },
  contentContainer: { padding: 20, paddingTop: 50 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 25 },
  backBtn: { color: '#808080', fontSize: 16 },
  headerTitle: { fontSize: 18, fontWeight: 'bold' },
  saveBtn: { color: '#FD5CA3', fontSize: 16, fontWeight: 'bold' },
  typeSelector: { flexDirection: 'row', backgroundColor: '#EAEAEA', borderRadius: 12, padding: 4, marginBottom: 20 },
  typeBtn: { flex: 1, paddingVertical: 10, alignItems: 'center', borderRadius: 10 },
  typeBtnActive: { backgroundColor: '#FFFFFF' },
  typeText: { fontSize: 14, color: '#808080', fontWeight: '500' },
  typeTextActive: { color: '#000000', fontWeight: 'bold' },
  inputCard: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 16, marginBottom: 15 },
  label: { fontSize: 12, color: '#808080', marginBottom: 8 },
  amountInput: { fontSize: 32, fontWeight: 'bold', color: '#FD5CA3' },
  input: { fontSize: 16, color: '#000' },
  sectionTitle: { fontSize: 14, fontWeight: 'bold', color: '#808080', marginVertical: 10 },
  categoryGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  catBadge: { backgroundColor: '#FFFFFF', paddingHorizontal: 16, paddingVertical: 10, borderRadius: 12, borderWidth: 1, borderColor: '#EAEAEA' },
  catBadgeActive: { backgroundColor: '#FD5CA3', borderColor: '#FD5CA3' },
  catText: { fontSize: 13, color: '#333' },
  catTextActive: { color: '#FFF', fontWeight: 'bold' },
});