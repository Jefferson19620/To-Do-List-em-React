import styles from "./Lista.module.css"

export function Lista({ todo , removerTodo, completar}) {

    return (
        <div className={styles.Tarefas}>
            <div className={styles.content}>
                <p>{todo.text}</p>
                <p className='estado'>({todo.isCompleted ? "Concluído" : "Pendente"})</p>
            </div>
            <div className={styles.botoes}>
                <input className={styles.checkbox} type="checkbox" checked={todo.isCompleted} onChange={() => completar(todo.id)} />
                <button onClick={() => removerTodo(todo.id)}>Excluir</button>
            </div>
        </div>
    )
}