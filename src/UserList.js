import React,{useEffect} from "react";

function User({user, onRemove, onToggle}){
    useEffect(() => { // deps 안에 특정 값이 있다면 언마운트시에도 호출이되고,
                        //값이 바뀌기 직전에도 호출
        console.log(user)
    })


    return(
        <div>
            <b
            style={{
                cursor:'pointer',
                color: user.active ? 'green' : 'black'
            }}
            onClick={()=>onToggle(user.id)}
            >
            {user.username}
            </b>
            &nbsp;
            <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
}

function UserList({users, onRemove, onToggle}){
    return(
        <div>
            {users.map(user => (
                <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />
            ))}
        </div>
    );
}

export default UserList;