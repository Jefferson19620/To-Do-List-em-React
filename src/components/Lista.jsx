import styles from "./Lista.module.css"
import { useState } from "react";

export function Lista({ todo, removerTodo, completar }) {
    const [Cor, setCor] = useState("red");

    function TrocarCor() {
        if (Cor == "red") {
            setCor("green")
        } else {
            setCor("red")
        }
    }

    return (
        <div className={styles.Tarefas}>
            <div className={styles.content}>
                <p>{todo.text}</p>
                <p className='estado' style={{ color: Cor }} >({todo.isCompleted ? "Concluído" : "Pendente"})</p>
            </div>
            <div className={styles.botoes}>
                <input className={styles.checkbox} type="checkbox" checked={todo.isCompleted} onChange={() => { completar(todo.id); TrocarCor(); }} />
                <button onClick={() => removerTodo(todo.id)}>Excluir</button>
            </div>
        </div>
    )
}