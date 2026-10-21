import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function AccountScreen() {
  const menuItems = [
    { icon: '👤', title: 'Personal Info', sub: 'Edit name, email, phone' },
    { icon: '🔔', title: 'Notification', sub: 'Spending alerts & reminders' },
    { icon: '🔒', title: 'Security', sub: 'Password, PIN, Biometrics' },
    { icon: '❓', title: 'Help & FAQ', sub: 'Support center & guides' },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>Account</Text>

      {/* User Profile Card */}
      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>SZ</Text>
        </View>
        <Text style={styles.userName}>Syed Zariel Ziqry</Text>
        <Text style={styles.userEmail}>user@cashcompass.com</Text>
      </View>

      {/* Menu Options */}
      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <View style={styles.menuLeft}>
              <Text style={{ fontSize: 20, marginRight: 15 }}>{item.icon}</Text>
              <View>
                <Text style={styles.menuTitle}>{item.title}</Text>
                <Text style={styles.menuSub}>{item.sub}</Text>
              </View>
            </View>
            <Text style={{ color: '#808080', fontSize: 16 }}>›</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Log Out Button */}
      <TouchableOpacity style={styles.logoutBtn}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F6F6F6' },
  contentContainer: { padding: 20, paddingTop: 50 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  profileCard: { backgroundColor: '#FFFFFF', borderRadius: 20, padding: 20, alignItems: 'center', marginBottom: 20 },
  avatar: { width: 70, height: 70, borderRadius: 35, backgroundColor: '#FD5CA3', justifyContent: 'center', alignItems: 'center', marginBottom: 10 },
  avatarText: { color: '#FFF', fontWeight: 'bold', fontSize: 22 },
  userName: { fontSize: 18, fontWeight: 'bold' },
  userEmail: { fontSize: 12, color: '#808080', marginTop: 4 },
  menuContainer: { backgroundColor: '#FFFFFF', borderRadius: 20, paddingHorizontal: 15, marginBottom: 20 },
  menuItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#F6F6F6' },
  menuLeft: { flexDirection: 'row', alignItems: 'center' },
  menuTitle: { fontSize: 15, fontWeight: '600' },
  menuSub: { fontSize: 11, color: '#808080', marginTop: 2 },
  logoutBtn: { backgroundColor: '#FFF0F5', borderRadius: 15, padding: 16, alignItems: 'center', borderWidth: 1, borderColor: '#FD5CA3' },
  logoutText: { color: '#FD5CA3', fontWeight: 'bold', fontSize: 15 },
});