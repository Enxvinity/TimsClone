import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useAppTheme } from '../ThemeContext';

export default function HomeScreen() {
  const { colors, mode, toggleTheme } = useAppTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.header}>
          <View>
            <Text style={[styles.greetingText, { color: colors.text }]}>Good afternoon,</Text>
            <Text style={[styles.nameText, { color: colors.text }]}>Hardy.</Text>
          </View>
          <View style={styles.headerIcons}>
            <TouchableOpacity onPress={toggleTheme} style={[styles.themeToggleBtn, { borderColor: colors.text }]}>
               <Text style={[styles.themeToggleText, { color: colors.text }]}>
                 {mode === 'light' ? 'Dark Mode' : 'Light Mode'}
               </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.promoBanner, { backgroundColor: colors.card }]}>
          <View style={styles.promoRedBlock}>
            <Text style={styles.promoRedText}>Tim</Text>
            <Text style={styles.promoRedText}>Hortons</Text>
          </View>
          <View style={styles.promoTextContainer}>
            <Text style={[styles.promoTitle, { color: colors.text }]} numberOfLines={1}>$3 Classic Hot Breakfa...</Text>
            <Text style={[styles.promoSub, { color: colors.text }]}>When you buy any size Hot or Cold Coffee</Text>
            <View style={styles.newOffersTag}>
              <Ionicons name="pricetag" size={12} color="#FFF" style={{ marginRight: 4 }} />
              <Text style={styles.newOffersText}>6 new offers!  {'>'}</Text>
            </View>
          </View>
        </View>

        <View style={styles.actionRow}>
          <View style={[styles.actionCard, { backgroundColor: colors.card }]}>
            <Text style={[styles.cardHeader, { color: colors.text }]}>Order</Text>
            
            {/* Constructing shapes via local CSS primitives avoids asynchronous image loading times 
                and ensures layout dimensions remain strict prior to mounting. */}
            <View style={styles.orderImagePlaceholder}>
               <View style={styles.fakeCup} />
               <View style={styles.fakeWrap} />
            </View>
            
            <Text style={styles.cardSub}>Start an Order for your Tims favourites.</Text>
          </View>

          <View style={[styles.actionCard, { backgroundColor: colors.card }]}>
            <Text style={[styles.cardHeader, { color: colors.text }]}>Rewards</Text>
            <Text style={[styles.pointsText, { color: colors.text }]}>176 pts</Text>
            
            <View style={styles.progressBarContainer}>
              <View style={styles.progressBarBg}>
                <View style={styles.progressBarFill} />
              </View>
              <View style={[styles.mapleLeafKnob, { borderColor: colors.card }]}>
                 <Ionicons name="leaf" size={10} color="#FFF" />
              </View>
            </View>
            
            <Text style={styles.cardSub}>You're banking your points.</Text>
          </View>
        </View>

        <View style={styles.gridContainer}>
          {[
            { id: '1', title: 'Offers', icon: 'pricetag', color: '#EAA944' },
            { id: '2', title: 'Delivery', icon: 'bus', color: '#D46A6A' },
            { id: '3', title: 'TimShop', icon: 'bag', color: '#CFA48D' },
            { id: '4', title: 'Community', icon: 'heart', color: '#C8102E' },
            { id: '5', title: 'Tims Word\nChallenge', icon: 'text', color: '#EAA944' },
            { id: '6', title: 'Tims NHL®\nChallenge', icon: 'remove', color: '#4D3327' },
            { id: '7', title: 'Give', icon: 'gift', color: '#C8102E' },
            { id: '8', title: 'Restaurant\nLocator', icon: 'location', color: '#D46A6A' },
          ].map((item) => (
            <TouchableOpacity key={item.id} style={styles.gridItem}>
              <View style={[styles.squircle, { backgroundColor: colors.card }]}>
                <Ionicons name={item.icon as any} size={28} color={item.color} />
              </View>
              <Text style={[styles.gridText, { color: colors.text }]}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContent: { paddingHorizontal: 16, paddingBottom: 40 },
  header: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginBottom: 20 },
  greetingText: { fontSize: 22, fontWeight: '800' },
  nameText: { fontSize: 22, fontWeight: '800' },
  headerIcons: { flexDirection: 'row', alignItems: 'center' },
  themeToggleBtn: { borderWidth: 1, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 15 },
  themeToggleText: { fontSize: 12, fontWeight: 'bold' },
  promoBanner: { borderRadius: 12, flexDirection: 'row', padding: 12, marginBottom: 16, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 5 },
  promoRedBlock: { backgroundColor: '#C8102E', width: 60, height: 90, borderRadius: 8, justifyContent: 'center', alignItems: 'center' },
  promoRedText: { color: '#FFF', fontWeight: '900', fontSize: 12 },
  promoTextContainer: { flex: 1, marginLeft: 12, justifyContent: 'center' },
  promoTitle: { fontSize: 14, fontWeight: 'bold', marginBottom: 2 },
  promoSub: { fontSize: 12, marginBottom: 10 },
  newOffersTag: { backgroundColor: '#1C6984', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 4, alignSelf: 'flex-start', flexDirection: 'row', alignItems: 'center' },
  newOffersText: { color: '#FFF', fontSize: 12, fontWeight: 'bold' },
  actionRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  actionCard: { borderRadius: 12, width: '48%', padding: 16, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 5 },
  cardHeader: { fontSize: 16, fontWeight: '900', marginBottom: 10 },
  orderImagePlaceholder: { flexDirection: 'row', height: 50, alignItems: 'flex-end', marginBottom: 10 },
  fakeCup: { width: 30, height: 45, backgroundColor: '#C8102E', borderBottomLeftRadius: 8, borderBottomRightRadius: 8 },
  fakeWrap: { width: 40, height: 25, backgroundColor: '#EAA944', borderRadius: 4, marginLeft: -10 },
  cardSub: { fontSize: 12, color: '#888', lineHeight: 16 },
  pointsText: { fontSize: 24, fontWeight: '900', marginBottom: 15 },
  progressBarContainer: { height: 20, justifyContent: 'center', marginBottom: 10 },
  progressBarBg: { height: 6, backgroundColor: '#E0DCD6', borderRadius: 3, width: '100%' },
  progressBarFill: { height: 6, backgroundColor: '#4D3327', borderRadius: 3, width: '30%' },
  mapleLeafKnob: { position: 'absolute', left: '25%', backgroundColor: '#4D3327', width: 20, height: 20, borderRadius: 10, justifyContent: 'center', alignItems: 'center', borderWidth: 2 },
  gridContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  gridItem: { width: '22%', alignItems: 'center', marginBottom: 20 },
  squircle: { width: 65, height: 65, borderRadius: 18, justifyContent: 'center', alignItems: 'center', marginBottom: 8, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 4 },
  gridText: { fontSize: 11, fontWeight: '700', textAlign: 'center' }
});