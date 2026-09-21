import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  card: { flexDirection: 'row', marginBottom: 12, borderRadius: 8, backgroundColor: '#f2f2f2', overflow: 'hidden' },
  cardImage: { width: 90, height: 90 },
  cardInfo: { flex: 1, padding: 10, justifyContent: 'center' },
  profileImage: { width: '100%', height: 200, borderRadius: 8, marginBottom: 12 },
  previewImage: { width: 150, height: 150, marginVertical: 10, borderRadius: 8 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 6, padding: 10, marginVertical: 10 },
  button: { backgroundColor: '#222', paddingVertical: 12, paddingHorizontal: 20, borderRadius: 8, alignItems: 'center', marginVertical: 6 },
  buttonText: { color: 'white', fontWeight: 'bold' },
});

export default styles;