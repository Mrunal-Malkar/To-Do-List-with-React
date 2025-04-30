import React, { useState, useEffect, useRef } from 'react'
import "./outcontainer.css"

const Outcontainer = () => {
    const inputtag = useRef();
    const allholder = useRef();
    const taskcontainerholder = useRef();
    const paratask = useRef();
    const editicon = useRef();
    const deleteicon = useRef();

    const [idTask, setTaskId] = useState(0);
    const [tStatus, settStatus] = useState(false);
    const [tasksList, setTasksList] = useState([]);


    const handleSave = () => {
        let unpreparedList = { id: idTask, p: inputtag.current.value };
        setTasksList(previousTasks => [...previousTasks, unpreparedList]);
        setTaskId(idTask + 1);
        console.log(tasksList)
        inputtag.current.value="";
    }

    const handleEdit=(e)=>{
    let parenttaskdiv=e.target.closest(".holder");
    let para=parenttaskdiv.querySelector(".para");
    console.log(parenttaskdiv.querySelector(".para"))
    inputtag.current.value=para.innerText;
    }

    const handleDelete=(id) => {
        setTasksList((previousTasks) => previousTasks.filter(task => task.id !== id));
    };

    const toggle = (e) => {
        const parentholder = e.target.parentElement;
        if (parentholder.style.textDecoration !== "line-through") {
            parentholder.style.textDecoration = "line-through";
            parentholder.style.fontStyle = "normal"; 
        } 
        else {
            parentholder.style.textDecoration = "none";
            parentholder.style.fontStyle = "normal";
        }
    };
    
    

        return (
            <div className="w-md-2/5 bg-[#4ECDC4] mt-10 rounded-xl outermostcontainer">
                <div className='p-4'>
                    <div>
                        <div className='font-bold p-2 flex justify-center'>
                            <h1 className='text-3xl'>Manage your Todos at once</h1>
                        </div>

                        <div>
                            <h1 className="text-2xl p-3 font-bold ps-0">Add a To-Do</h1>
                            <div className='flex justify-around md-justify-between'>
                                <input ref={inputtag} placeholder="Add your TODO's" id='inputoftodo' className='rounded-2xl ps-4' />
                                <div className='inline bg-[#292F36] text-white justify-center rounded-2xl align-middle'>
                                    <button className='w-20 flex align-middle justify-center' onClick={handleSave}><p className='mt-1.5'>Save</p></button>
                                </div>
                            </div>
                        </div>

                        <div className='p-3'>
                            <input type="checkbox" id='checkboxshowmarked' className='mr-3'></input>
                            <span htmlFor="checkboxshowmarked">Show marked</span>
                        </div>
                    </div>

                    <div className='flex justify-center p-2'><div className='bg-[#292F36] w-3/4 h-0.5'></div></div>

                    <div>
                        <h1 className='p-2 text-2xl font-bold '>Your Todos</h1>
                        <div className='p-2 taskcontainer' ref={taskcontainerholder}>

                            {tasksList.map(tasks => (
                                <div className='flex holder' key={tasks.id} data-taskid="" ref={allholder}>
                                    <input type="checkbox" className='mr-5 mt-2 size-4'id={tasks.id} onClick={toggle} />
                                    <p ref={paratask} className='text-xl w-11/12 para'>{tasks.p}</p>
                                    <div className='flex'>
                                        <button ref={editicon} id={tasks.id} onClick={handleEdit}><i  className="fa-regular fa-pen-to-square m-1 ms-2"></i></button>
                                        <button  ref={deleteicon} id={tasks.id} onClick={()=>handleDelete(tasks.id)}><i className="fa-solid fa-trash m-1"></i></button>
                                    </div>
                                </div>))}

                        </div>
                    </div>

                </div>
            </div>
        )
    }

export default Outcontainer
