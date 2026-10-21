import { useRouter } from 'expo-router'; // <-- Kena tambah import ini
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function BudgetScreen() {
  const router = useRouter();
    
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>SZ</Text>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={() => router.push('/add-transaction')}>
            <Text style={{ fontSize: 22 }}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ fontSize: 22 }}>🗑️</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Total Income Card */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardLabel}>My Income</Text>
          <Text style={styles.dateBadge}>Jan 2025</Text>
        </View>

        <Text style={styles.subLabel}>Total Income</Text>
        <Text style={styles.incomeAmount}>RM5263.50</Text>

        {/* Breakdown Income */}
        <View style={styles.breakdownRow}>
          <View style={styles.breakdownItem}>
            <Text style={styles.breakdownTitle}>Business</Text>
            <Text style={styles.breakdownValue}>RM2217.50</Text>
          </View>
          <View style={styles.breakdownItem}>
            <Text style={styles.breakdownTitle}>Salary</Text>
            <Text style={styles.breakdownValue}>RM1522.75</Text>
          </View>
          <View style={styles.breakdownItem}>
            <Text style={styles.breakdownTitle}>Investment</Text>
            <Text style={styles.breakdownValue}>RM1522.75</Text>
          </View>
        </View>
      </View>

      {/* Monthly Budget Summary */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.incomeAmountSmall}>RM992.60</Text>
          <Text style={styles.dateBadge}>Jan 2025</Text>
        </View>
        <Text style={styles.cardLabel}>For this month</Text>
      </View>

      {/* Budget Per Categories */}
      <Text style={styles.sectionTitle}>Budget Per Categories</Text>

      {/* Category 1: House Rent */}
      <View style={styles.categoryCard}>
        <View style={styles.categoryLeft}>
          <Text style={{ fontSize: 24, marginRight: 12 }}>🏠</Text>
          <View>
            <Text style={styles.categoryName}>House rent</Text>
            <Text style={styles.categorySub}>RM0.00 left to spend</Text>
          </View>
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={styles.categoryAmount}>RM1200.00</Text>
          <Text style={styles.categoryPercent}>14%</Text>
        </View>
      </View>

      {/* Category 2: Education */}
      <View style={styles.categoryCard}>
        <View style={styles.categoryLeft}>
          <Text style={{ fontSize: 24, marginRight: 12 }}>🎓</Text>
          <View>
            <Text style={styles.categoryName}>Education</Text>
            <Text style={styles.categorySub}>RM0.00 left to spend</Text>
          </View>
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={styles.categoryAmount}>RM1000.00</Text>
          <Text style={styles.categoryPercent}>6%</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F6F6F6' },
  contentContainer: { padding: 20, paddingTop: 50 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  avatar: { width: 45, height: 45, borderRadius: 22.5, backgroundColor: '#EAEAEA', justifyContent: 'center', alignItems: 'center' },
  avatarText: { fontWeight: 'bold', fontSize: 16 },
  headerIcons: { flexDirection: 'row', gap: 15 },
  card: { backgroundColor: '#FFFFFF', borderRadius: 20, padding: 20, marginBottom: 16, elevation: 2 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  cardLabel: { fontSize: 13, color: '#808080' },
  subLabel: { fontSize: 12, color: '#808080', marginTop: 10 },
  dateBadge: { backgroundColor: '#F0F0F0', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 10, fontSize: 12, color: '#666' },
  incomeAmount: { fontSize: 28, fontWeight: 'bold', marginVertical: 6 },
  incomeAmountSmall: { fontSize: 22, fontWeight: 'bold' },
  breakdownRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, paddingTop: 15, borderTopWidth: 1, borderTopColor: '#F0F0F0' },
  breakdownItem: { alignItems: 'flex-start' },
  breakdownTitle: { fontSize: 11, color: '#808080' },
  breakdownValue: { fontSize: 12, fontWeight: '600', marginTop: 2 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginVertical: 12 },
  categoryCard: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 16, marginBottom: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  categoryLeft: { flexDirection: 'row', alignItems: 'center' },
  categoryName: { fontSize: 15, fontWeight: 'bold' },
  categorySub: { fontSize: 11, color: '#808080', marginTop: 2 },
  categoryAmount: { fontSize: 15, fontWeight: 'bold' },
  categoryPercent: { fontSize: 11, color: '#FD5CA3', fontWeight: 'bold', marginTop: 2 },
});