import { useState, useEffect } from 'react';
import './Form.css';


const Form = (props) => {
    
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [experience, setExperience] = useState('');
    const [level, setLevel] = useState('');

    useEffect(() =>{
        if (props.form) {
            setUsername(props.form.username);
            setEmail(props.form.email);
            setExperience(props.form.experience);
            setLevel(props.form.level);
        } 
    }, [props.form]);

    const usernameOnChangeHandle = (event) => {
        setUsername(event.target.value);
    }

    const emailOnChangeHandle = (event) => {
        setEmail(event.target.value);
    }

    const experienceOnChangeHandle = (event) => {
        setExperience(event.target.value);
    }

    const levelOnChangeHandle = (event) => {
        setLevel(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if(props.form) {
            const data = {
                id: props.form.id,
                username: username,
                email: email,
                experience: experience,
                level: level,
        }
        props.onUpdatePlayer(data);
        } else{
            const data = {
                username: username,
                email: email,
                experience: experience,
                level: level,
        }
        props.onAddPlayer(data);       
        }

        setUsername('');
        setEmail('');
        setExperience('');
        setLevel('');
        
    };

    const onDelete = (event) => {
        event.preventDefault();

        const data = {
            id: props.form.id,
            username: username,
            email: email,
            experience: experience,
            level: level,
    }
    props.onDeletePlayer(data);


    }

    return (
        <form className="form__controls" onSubmit={onSubmit} onDelete={onDelete}>
            <div className="form__control">
                <label>username</label>
                <input type="text" value={username} onChange={usernameOnChangeHandle}></input>
            </div>
            <div className="form__control">
                <label>email</label>
                <input type="text" value={email} onChange={emailOnChangeHandle}></input>
            </div>
            <div className="form__control">
                <label>experience</label>
                <input type="text" value={experience} onChange={experienceOnChangeHandle}></input>
            </div>
            <div className="form__control">
                <label>level</label>
                <input type="text" value={level} onChange={levelOnChangeHandle}></input>
            </div>

            <button type="submit" className="form__actions">
                Submit
            </button>

            <button type="submit" className="form__actions">
                Delete
            </button>

        </form>
    )
}

export default Form;