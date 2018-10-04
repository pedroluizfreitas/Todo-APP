// Após a instalação do middleware promise, podemos zerar a lista de de INITIAL_STATE
const INITIAL_STATE = { description: '', list: [] }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED':
            // Pegamos o estado do jeito que está e vamos replicar ele. 
            // Não estamos alterando o estado atual. Estou somente mudando a descrição.
            return { ...state, description: action.payload }
        case 'TODO_SEARCH':
            return { ...state, list: action.payload }
        case 'TODO_CLEAR':
            return { ...state, description: '' }
        case 'TODO_REMOVED':
            return { ...state }
        default:
            return state;
    }
}