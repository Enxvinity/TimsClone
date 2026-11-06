import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useAppTheme } from '../ThemeContext';

export default function ScanScreen() {
  const { colors } = useAppTheme();
  
  // Encapsulating the toggle state locally avoids unnecessary re-renders of the 
  // parent layout containers during user interaction.
  const [redeemPoints, setRedeemPoints] = useState(true);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]} edges={['top']}>
      
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: colors.text }]}>Scan</Text>
        <Ionicons name="card-outline" size={24} color={colors.text} style={styles.headerIcon} />
      </View>

      <View style={styles.tabContainer}>
        <View style={styles.activeTab}>
           <Text style={styles.activeTabText}>Scan</Text>
        </View>
        <View style={styles.inactiveTab}>
           <Text style={[styles.inactiveTabText, { color: colors.darkBrown }]}>Tims Gift Card</Text>
        </View>
      </View>

      <View style={[styles.card, { backgroundColor: colors.card }]}>
        <View style={styles.rewardsTopRow}>
          <View style={styles.flagIconContainer}>
             <Ionicons name="flag" size={16} color="#FFF" />
          </View>
          <View style={styles.rewardsTextStack}>
            <Text style={[styles.rewardsTitle, { color: colors.text }]}>Tims Rewards</Text>
            <Text style={styles.blurredCodePlaceholder}>3EPP-P8N8-Y6DK</Text>
          </View>
          <Text style={[styles.pointsText, { color: colors.text }]}>176 Points</Text>
        </View>
      </View>

      <View style={[styles.qrCard, { backgroundColor: colors.card }]}>
        <Text style={[styles.qrTitle, { color: colors.text }]}>Scan for Tims Rewards</Text>
        <View style={styles.qrContainer}>
          <Ionicons name="qr-code" size={220} color={colors.text} />
        </View>
      </View>

      <View style={[styles.redeemCard, { backgroundColor: colors.card }]}>
         <View style={styles.redeemRow}>
           <View>
             <Text style={[styles.rewardsTitle, { color: colors.text }]}>Tims Rewards</Text>
             <Text style={[styles.redeemSub, { color: colors.text }]}>Redeem my points</Text>
           </View>
           
           {/* Utilizing the native Switch component ensures the app respects user-configured 
               OS accessibility settings for toggles and interactions. */}
           <Switch
             trackColor={{ false: '#767577', true: colors.primaryRed }}
             thumbColor="#FFFFFF"
             ios_backgroundColor="#3e3e3e"
             onValueChange={setRedeemPoints}
             value={redeemPoints}
           />
         </View>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 16 },
  header: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingVertical: 15, position: 'relative' },
  headerTitle: { fontSize: 18, fontWeight: '900' },
  headerIcon: { position: 'absolute', right: 0 },
  tabContainer: { flexDirection: 'row', marginBottom: 20 },
  activeTab: { flex: 1, alignItems: 'center', paddingBottom: 10, borderBottomWidth: 3, borderBottomColor: '#C8102E' },
  activeTabText: { fontSize: 16, fontWeight: '900', color: '#C8102E' },
  inactiveTab: { flex: 1, alignItems: 'center', paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: '#E0DCD6' },
  inactiveTabText: { fontSize: 16, fontWeight: '700' },
  card: { borderRadius: 12, padding: 20, marginBottom: 15, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 5 },
  rewardsTopRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  flagIconContainer: { backgroundColor: '#C8102E', padding: 4, borderRadius: 4, marginRight: 12 },
  rewardsTextStack: { flex: 1 },
  rewardsTitle: { fontSize: 18, fontWeight: '900' },
  blurredCodePlaceholder: { fontSize: 14, color: '#A9A9A9', letterSpacing: 1, marginTop: 4 },
  pointsText: { fontSize: 18, fontWeight: '900' },
  qrCard: { borderRadius: 12, padding: 30, alignItems: 'center', marginBottom: 15 },
  qrTitle: { fontSize: 20, fontWeight: '900', marginBottom: 25 },
  qrContainer: { alignItems: 'center', justifyContent: 'center' },
  redeemCard: { borderRadius: 12, padding: 20 },
  redeemRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  redeemSub: { fontSize: 16, fontWeight: '700', marginTop: 10 }
});