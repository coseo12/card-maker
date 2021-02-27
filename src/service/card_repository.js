import { firebaseDatabae } from './firebase';

class CardRepository {
  syncCards(userId, onUpdate) {
    const ref = firebaseDatabae.ref(`${userId}/cards`);
    ref.on('value', snapshot => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => ref.off();
  }
  saveCard(userId, card) {
    firebaseDatabae.ref(`${userId}/cards/${card.id}`).set(card);
  }
  removeCard(userId, card) {
    firebaseDatabae.ref(`${userId}/cards/${card.id}`).remove();
  }
}

export default CardRepository;
