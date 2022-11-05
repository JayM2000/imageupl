import ax from 'axios';

export const uploadpic = (formdt) =>async dispatch => {
    try{
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const dt = await ax.post('/upld',formdt,config);

        if(dt.data.st === 404){
            throw `${dt.data.mess}`;
        }


        dispatch({
            type:'uploaded',
            payload:dt.data.mess
        });

    }
    catch(err){
        console.log(err);
        console.log(Object.keys(err));
    }
};

export const getimgall = (val) =>async dispatch => {
    try{
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const dt = await ax.get('/getimgall',config);
        let vls = dt.data.mess;
        
        if(dt.data.st === 404){
            throw `${dt.data.mess}`;
        }
        

        if(val.trim() !== ''){
            const allprof = dt.data.mess.imgname;

            const ser = allprof.filter((objs) => {
                const textt = objs.toLowerCase().trim().includes(val.toLowerCase().trim());
                return textt;
            });

            const index = dt.data.mess.imgname.indexOf(ser[0]);

            vls = {img:[dt.data.mess.img[index]],imgname:ser};
        }


        dispatch({
            type:'getimgall',
            payload:vls
        });
    }
    catch(err){
        console.log(err);
    }
}

export const serch = (val) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const body = JSON.stringify({ser:val});

        const dt = await ax.post('/ser',body,config);

        console.log(dt.val.mess);
    } catch (err) {
        console.log(err);
    }
} ;

// logout user from every where
export const logoutt = () =>dispatch => {
    dispatch({
        type:'logout'
    });
};