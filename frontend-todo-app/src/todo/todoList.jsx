import React from 'react'
import IconButton from '../template/iconButton';
import { bindActionCreators } from 'redux'

import { connect } from 'react-redux'
import { MarkAsDone, MarkAsPending, remove } from './todoActions'

const TodoList = props => {

    const renderRows = () => {

        const list = props.list || []

        return (list.map((todo, index) => (
            <tr key={todo._id}>

                <td>{index + 1}</td>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton style='success' icon='check' hide={todo.done}
                        onClick={() => props.MarkAsDone(todo)}>
                    </IconButton>
                    <IconButton style='warning' icon='undo' hide={!todo.done}
                        onClick={() => props.MarkAsPending(todo)}>
                    </IconButton>
                    <IconButton style='danger' icon='trash-o' hide={todo.done}
                        onClick={() => props.remove(todo)}>
                    </IconButton>
                </td>
            </tr>
        )))
    }

    // Criação da tabela abaixo
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th className='tableActions'>Index</th>
                    <th>Description</th>
                    {/* Classe criada em custom.css */}
                    <th className='tableActions'>Actions</th>

                </tr>
            </thead>
            <tbody>
                {/* Chamada para outra função dentro deste componente */}
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ MarkAsDone, MarkAsPending, remove }, dispatch)

const mapStateToProps = (state) => ({
    list: state.todo.list
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)