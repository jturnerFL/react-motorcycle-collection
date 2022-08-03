let token = 'c8b572f72f698bec918c0214aa2518a0cad1acf1663ece67';

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://my-motorcylce-inventory-jimt.herokuapp.com/api/inventory`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }   
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()

    },

    create: async(data: any = {}) => {
        const response = await fetch(`https://my-motorcylce-inventory-jimt.herokuapp.com/api/inventory`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
	},

    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://my-motorcylce-inventory-jimt.herokuapp.com/api/inventory${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
    },

    delete: async(id:string) => {
        const response = await fetch(`https://my-motorcylce-inventory-jimt.herokuapp.com/api/inventory${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
    }
}


