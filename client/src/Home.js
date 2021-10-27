import React from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {makeStyles} from '@material-ui/core/styles';
import { useDispatch,useSelector } from 'react-redux';
import { deleteStream, loadStreams } from "./redux/actions"
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import GoogleAuth from './GoogleAuth';
import { useHistory } from 'react-router-dom';
import "./page.css"






const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
const useStyles = makeStyles({
    table: {
        marginTop : 100,
        minWidth : 900,
    }
})



const Home = () => {

  
  
const classes = useStyles();
let dispach = useDispatch();
let history = useHistory();
const {streams} = useSelector(state => state.data)

useEffect(() => {
    dispach(loadStreams())
    
}, [])
 
const handleDelete = (id) => {
  if(window.confirm("Are you sure you want to delete the stream ?")) {
    dispach(deleteStream(id))
  }
 
  


}

    return (
        <div>
          <div>
           <GoogleAuth />
          </div>
         
             <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Streams</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
            
          </TableRow>
        </TableHead>
         <TableBody>
          { streams && streams.map((stream) => (
            <StyledTableRow key={stream.id}>
              <StyledTableCell component="th" scope="row">
              <div className="tit" onClick={()=> history.push(`/StreamShow/${stream.id}`)}>
              {stream.title}
              </div>
              
              <div className="desc">

              {stream.description}
              </div>
              
              </StyledTableCell>

              <StyledTableCell align="center">
              <ButtonGroup  variant="contained" aria-label="outlined button group">
  <Button color="secondary" style={{marginRight: "10px"}} onClick={()=>handleDelete(stream.id)}>Delete</Button>
  
  <Button color="primary" onClick={() => history.push(`/editStream/${stream.id}`)}>Edit</Button>
  
</ButtonGroup>

              </StyledTableCell>
              
            </StyledTableRow>
          ))}
          </TableBody> 
      </Table>
    </TableContainer>
    <div className="btncreate">
    <Button onClick={() => history.push("/createStream")} color="primary" variant="contained" style={{float: "left"}}>Create Stream</Button>
      </div>
        </div>
    )
}

export default Home;
