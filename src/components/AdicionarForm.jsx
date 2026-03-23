import React, { useState } from 'react';
import styles from "./AdicionarForm.module.css"

export function Adicionar({addTodo}) {
    const [value, setValue] = useState("");
    

    function handleSubmit(e) {
        e.preventDefault()
        if (!value) return;

        console.log(value)
        addTodo(value);
        setValue("")
    }

    return (
        <div className={styles.container}>
           
            <form className={styles.form} onSubmit={handleSubmit}>
                <input className={styles.input} type="text" placeholder="Digite o titulo da tarefa" value={value} onChange={(e) => setValue(e.target.value)} />
                
                <button className={styles.button} type="submit">Criar tarefa</button>
            </form>
        </div>
    )
}