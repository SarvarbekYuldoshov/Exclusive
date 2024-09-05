import { create } from 'zustand'

const useSharedStore = create ((set)=>{
    cards: []
    setCards: (newCards) => set({cards:newCards})
})
export default useSharedStore