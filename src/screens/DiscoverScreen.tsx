import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useAppTheme } from '../ThemeContext';

export default function DiscoverScreen() {
  const { colors } = useAppTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        <View style={styles.header}>
          <Text style={[styles.headerTitle, { color: colors.text }]}>Discover</Text>
          <View style={styles.headerIcons}>
            <Ionicons name="bag-outline" size={24} color={colors.text} style={{ marginRight: 15 }} />
            <Ionicons name="person-circle-outline" size={28} color={colors.text} />
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Offers</Text>
          <Text style={styles.viewAllText}>View all (6) {'>'}</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
          
          {/* Card metrics deliberately mirror the aspect ratios of the provided designs to 
              ensure proportional UI scaling across varying screen densities. */}
          <View style={[styles.offerCard, { backgroundColor: colors.card }]}>
            <View style={styles.cardImageTop}>
              <View style={styles.starsIcon}><Ionicons name="sparkles" size={16} color="#FFF" /></View>
              <Text style={styles.membersText}>MORE FOR{'\n'}MEMBERS{'\n'}MONTH+</Text>
            </View>
            <View style={styles.cardContent}>
              <Text style={[styles.offerTitle, { color: colors.text }]}>$6 Breakfast Combo</Text>
              <Text style={[styles.offerDesc, { color: colors.text }]}>Breakfast Sandwich, Hashbrown and Hot or Iced Coffee</Text>
              <Text style={styles.daysLeft}>2 days left</Text>
              <View style={styles.detailsRow}>
                 <Text style={[styles.detailsText, { color: colors.text }]}>Offer details</Text>
                 <Ionicons name="document-text-outline" size={14} color={colors.text} />
              </View>
              <TouchableOpacity style={styles.activateBtn}>
                <Text style={styles.activateBtnText}>Activate</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={[styles.offerCard, { backgroundColor: colors.card }]}>
             <View style={styles.cardImageTop}>
              <View style={styles.starsIcon}><Ionicons name="sparkles" size={16} color="#FFF" /></View>
              <Text style={styles.membersText}>MORE FOR{'\n'}MEMBERS{'\n'}MONTH+</Text>
            </View>
            <View style={styles.cardContent}>
              <Text style={[styles.offerTitle, { color: colors.text }]}>$6 Deal</Text>
              <Text style={[styles.offerDesc, { color: colors.text }]}>6-pack Assorted Donuts</Text>
              <Text style={styles.daysLeft}>2 days left</Text>
              <View style={styles.detailsRow}>
                 <Text style={[styles.detailsText, { color: colors.text }]}>Offer details</Text>
                 <Ionicons name="document-text-outline" size={14} color={colors.text} />
              </View>
              <TouchableOpacity style={styles.activateBtn}>
                <Text style={styles.activateBtnText}>Activate</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        <View style={styles.dotsContainer}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        <Text style={[styles.sectionTitle, { color: colors.text, marginHorizontal: 16, marginTop: 10 }]}>Explore what's new</Text>
        <View style={styles.exploreBanner}>
           <Text style={styles.exploreBannerText}>Tims Rewards{'\n'}MORE FOR{'\n'}MEMBERS</Text>
           <Text style={styles.huge2X}>2X</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 15 },
  headerTitle: { fontSize: 20, fontWeight: '900' },
  headerIcons: { flexDirection: 'row', alignItems: 'center' },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', paddingHorizontal: 16, marginBottom: 15 },
  sectionTitle: { fontSize: 24, fontWeight: '900' },
  viewAllText: { fontSize: 16, fontWeight: '900', color: '#C8102E' },
  carousel: { paddingLeft: 16, marginBottom: 15 },
  offerCard: { width: 280, borderRadius: 12, marginRight: 16, overflow: 'hidden' },
  cardImageTop: { backgroundColor: '#C8102E', height: 130, padding: 12, flexDirection: 'row', justifyContent: 'space-between' },
  starsIcon: { alignSelf: 'flex-start' },
  membersText: { color: '#FFF', fontSize: 10, fontWeight: '900', textAlign: 'right' },
  cardContent: { padding: 16 },
  offerTitle: { fontSize: 18, fontWeight: '900', marginBottom: 10 },
  offerDesc: { fontSize: 14, minHeight: 40, marginBottom: 15 },
  daysLeft: { fontSize: 12, fontWeight: '900', color: '#C8102E', marginBottom: 15 },
  detailsRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  detailsText: { fontSize: 12, marginRight: 4, textDecorationLine: 'underline' },
  activateBtn: { backgroundColor: '#C8102E', paddingVertical: 14, borderRadius: 8, alignItems: 'center' },
  activateBtnText: { color: '#FFF', fontSize: 16, fontWeight: '900' },
  dotsContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 30 },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#D8D4CE', marginHorizontal: 4 },
  activeDot: { backgroundColor: '#4D3327' },
  exploreBanner: { marginHorizontal: 16, marginTop: 15, backgroundColor: '#C8102E', height: 130, borderRadius: 12, padding: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  exploreBannerText: { color: '#FFF', fontWeight: '900', fontSize: 20 },
  huge2X: { color: '#FFF', fontSize: 60, fontWeight: '900', fontStyle: 'italic' }
});