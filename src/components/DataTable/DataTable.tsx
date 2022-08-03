import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { useGetData } from '../../custom-hooks';
import { server_calls } from '../../api';
import { Button, Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle } from '@material-ui/core';
import { InventoryForm } from '../InventoryForm';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width:90, hide:true },
    { field: 'name', headerName: 'Inventory Name', flex:1 },
    { field: 'description', headerName: 'Description', flex: 1 },
    { field: 'price', headerName: 'Price', flex:1 },
    { field: 'max_speed', headerName: 'Max Speed', flex: 2 },
];

interface gridData {
    data: {
        id?: string
  }
}

export const DataTable = () => {

    let { inventoryData, getData } = useGetData();
    let [ open, setOpen ] = useState(false);
    let [gridData, setData ] = useState<gridData>({data:{}});
    const [ selectionModel, setSelectionModel ] = useState<any>([]);

    let handleOpen = () => {
        setOpen(true)
    };

    let handleClose = () => {
        setOpen(false)
    };

    let deleteData = () => {
        server_calls.delete(selectionModel);
        getData();
        setTimeout( () => {window.location.reload(); }, 1000)
    }

    // console.log(gridData.data.id!);
    // console.log(`testing for data ${inventoryData}`)

    return (
        <div style={{ height:400, width: '100%' }}>
            <h2>The Inventory</h2>

        <DataGrid rows={inventoryData} columns={ columns } pageSize={ 5 } checkboxSelection={true}
        onSelectionModelChange={ (item) => {
            setSelectionModel(item)
        }} />

        <Button onClick={handleOpen}>Update</Button>
        <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Update Inventory {selectionModel}</DialogTitle>
            <DialogContent>
                <DialogContentText>Update Inventory</DialogContentText>
                    <InventoryForm id={selectionModel!}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">Cancel</Button>
                <Button onClick={handleClose} color="primary">Done</Button>
            </DialogActions>
        </Dialog>

        </div>
    )
}
