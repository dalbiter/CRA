import React from 'react';

const Clicker = () => {
    const fireLasers = (e) => {
        const data = {
            name: "Willy WOnka",
            age: 78
        }
        console.log(data)
        data.name = null
        console.log(e)
        console.log("THE LASERS HAVE BEEN FIRES")
        console.log("ZAP! ZAP! PEW! PEW!")
    }
    return (
        <>
            <button onClick={fireLasers}>Click Me</button>
            <textarea onScroll={fireLasers} rows="2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, eaque saepe sequi provident odit consequuntur consequatur cumque magni repellat ducimus perferendis placeat ea. Commodi, laborum voluptatibus corrupti eum dolor assumenda!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ratione incidunt porro excepturi, nulla nemo odit sint, tempore quia eum delectus pariatur ipsa doloribus error voluptatum quae magnam voluptas soluta! Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, aliquid aut dicta numquam doloribus provident sunt reiciendis repudiandae soluta! Ut optio architecto eligendi expedita in illum vitae quae, vero suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt magni modi, sint inventore nemo mollitia fugit, ea earum tempore architecto, similique numquam porro ex voluptas iste. Consequatur velit quae perspiciatis.
            </textarea> 
        </>
        
    )
};

// important not to exectue fireLaser() above, we want it to execute on the event 

export default Clicker;