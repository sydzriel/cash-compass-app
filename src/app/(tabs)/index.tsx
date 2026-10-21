import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Top Header / Avatar & Actions */}
      <View style={styles.header}>
        {/* ELEMEN 1: KIRI (Avatar) */}
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>SZ</Text>
        </View>

        {/* ELEMEN 2: KANAN (Ikon Action) */}
        <View style={styles.headerIcons}>
          <TouchableOpacity 
            style={styles.iconBtn} 
            onPress={() => router.push('/add-transaction')}
            activeOpacity={0.7}
          >
            <Text style={styles.plusIconText}>+</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBtn} activeOpacity={0.7}>
            <Text style={styles.trashIconText}>🗑️</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Card 1: Available Balance */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardLabel}>Available Balance</Text>
          <TouchableOpacity style={styles.detailsBtn}>
            <Text style={styles.detailsText}>Details</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.balanceAmount}>RM1560.50</Text>

        <View style={styles.subInfoBox}>
          <Text style={styles.subInfoText}>
            24 more days - RM120 per day. Left RM 1000 of RM 2000
          </Text>
        </View>
      </View>

      {/* Card 2: Savings Goal (Bromo!) */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={styles.goalHeaderLeft}>
            <Text style={{ fontSize: 20, marginRight: 8 }}>💰</Text>
            <View>
              <Text style={styles.goalTitle}>Bromo!</Text>
              <Text style={styles.cardLabel}>Goal</Text>
            </View>
          </View>
          <Text style={{ fontSize: 18 }}>↑</Text>
        </View>

        {/* Progress Bar */}
        <View style={styles.progressTrack}>
          <View style={[styles.progressBar, { width: '65%' }]} />
        </View>

        <View style={styles.goalDates}>
          <Text style={styles.dateText}>Jan 2025</Text>
          <Text style={styles.dateText}>Mar 2025</Text>
        </View>
      </View>

      {/* Card 3: Expenses Graph */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardLabel}>Expenses</Text>
          <View style={styles.tagYear}>
            <Text style={styles.tagYearText}>Year</Text>
          </View>
        </View>

        <Text style={styles.expensesAmount}>RM1527.40</Text>

        {/* Visual Bar Chart */}
        <View style={styles.chartContainer}>
          {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'].map((month, index) => {
            const heights = [30, 50, 40, 70, 35, 60, 45, 80, 65, 55, 40, 30];
            return (
              <View key={index} style={styles.barWrapper}>
                <View style={[styles.bar, { height: heights[index] }]} />
                <Text style={styles.barLabel}>{month}</Text>
              </View>
            );
          })}
        </View>
        <Text style={styles.chartYearLabel}>2025</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#EAEAEA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000000',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#EAEAEA',
    justifyContent: 'center', // Pembetulan: justifyContent, bukan justify
    alignItems: 'center',
  },
  plusIconText: {
    fontSize: 22,
    fontWeight: '400',
    color: '#000000',
    textAlign: 'center',
    lineHeight: 24, // Memastikan kedudukan + tegak tepat di tengah
    includeFontPadding: false, // Menghilangkan padding fon automatik pada Android
  },
  trashIconText: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 20,
    includeFontPadding: false,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardLabel: {
    fontSize: 13,
    color: '#808080',
    fontWeight: '500',
  },
  detailsBtn: {
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 12,
  },
  detailsText: {
    fontSize: 12,
    color: '#333',
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical: 12,
  },
  subInfoBox: {
    backgroundColor: '#FAF5FF',
    padding: 12,
    borderRadius: 12,
    marginTop: 5,
  },
  subInfoText: {
    fontSize: 12,
    color: '#808080',
  },
  goalHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  goalTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
  },
  progressTrack: {
    height: 10,
    backgroundColor: '#EAEAEA',
    borderRadius: 5,
    marginVertical: 15,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#FD5CA3',
    borderRadius: 5,
  },
  goalDates: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateText: {
    fontSize: 12,
    color: '#808080',
  },
  expensesAmount: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical: 8,
  },
  tagYear: {
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  tagYearText: {
    fontSize: 12,
    color: '#666',
  },
  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 100,
    marginTop: 15,
    paddingTop: 10,
  },
  barWrapper: {
    alignItems: 'center',
    flex: 1,
  },
  bar: {
    width: 8,
    backgroundColor: '#FD5CA3',
    borderRadius: 4,
  },
  barLabel: {
    fontSize: 10,
    color: '#808080',
    marginTop: 6,
  },
  chartYearLabel: {
    textAlign: 'right',
    fontSize: 11,
    color: '#808080',
    marginTop: 8,
  },
});