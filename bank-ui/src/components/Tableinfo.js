import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ImgOne from '../static/images/dataScience.jpg';
import ImgTwo from '../static/images/image2.jpg';
import ImgThree from '../static/images/imageThree.jpg';
import ImgFour from '../static/images/imageFour.jpg';
import ImgFive from '../static/images/imageFive.jpg';
import { Redirect } from "react-router";
import Collaborators from "./Collaborators";
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import IconButton from '@material-ui/core/IconButton';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';




import {
    Grid,
    Button,
    TextField,
    Link,
    Typography,
    Checkbox,
    FormControlLabel,
  } from "@material-ui/core";

  const useStyles = makeStyles((theme) => ({
 
    button:{
      position: 'relative',
      alignItems: 'center',
      alignText: 'center',
      justifyContent: 'center',
    },
  
  
  }));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor:  "#060b26" ,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
  button:{
    justifyContent: 'center',
      alignItems: 'center'
  }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


function createData(name, image, description, collaborators, protein) {
  return { name, image, description, collaborators, protein };
}

function goToWebPage(id) {
  if(id===1){
    //window.location.replace('https://dsi.udel.edu/core/computational-resources/darwin/');
  }
}
const rows = [
    {
    "Name": "DARWIN -- Delaware Advanced Research Workforce and Innovation Network",
     "id": 1,
    "image":ImgOne,
    "page":"https://dsi.udel.edu/core/computational-resources/darwin/",
    "Description": "DARWIN is a compute and storage resource supporting computational and data-intensive research at the University of Delaware and in the Delaware Region. DARWIN is funded by an NSF MRI (Major Research Instrumentation) grant.",
    "collaborators": [{"name": "Cathy Wu", "page":"https://bioinformatics.udel.edu/people/personnel/cathy_wu/" }, {"name": "Ben Bagozzi", "page":"https://www.poscir.udel.edu/people/faculty/Bagozzib"},{ "name": "Arthi Jayaraman", "page":"https://cbe.udel.edu/people/faculty/arthij/"}, { "name": "Bill Totten", "Page":"https://sites.udel.edu/it-rci/about/" },{"name": "as well as a group of 50+ researchers.", "Page":""}
    ],  "ResearchStaff": [{"name":"No yet","Page":""}]},
   
    {
        "Name": "The Xpert Network --A Peer Network for the exchange of computational best practices and support environments",
        "id": 2,
        "image":ImgTwo,
        "page":"https://sites.udel.edu/xpert-cdi/",
        "Description": "Through a series of online and face-to-face meetings we are aiming to create synergy among teams that assist researchers in developing, optimizing, and running computational and data-intensive applications. We also connect developers of tools that help accomplish these tasks.",
        "collaborators": [{"name":"No yet", "Page":""}],
        "ResearchStaff": [{"name": "Parinaz Barakhshan", "Page":""}
        ]
    },
    {
        "Name": "Real-Application Benchmarks for High-Performance Computing",
        "id": 3,
        "image":ImgThree,
        "page":"https://www.nsf.gov/awardsearch/showAward?AWD_ID=1842623",
        "Description": "We are creating HPC benchmarks that are representative of real-world applications. This is a collaboration with the Standard Performance Evaluation Corporation, SPEC and Indiana University.",
        "collaborators": [{"name":"No yet", "Page":""}],
        "ResearchStaff": [{"name": "Sunita Chandrasekaran" ,"page":"https://www.eecis.udel.edu/~schandra/" },{"name": "Robert Henschel", "page":"https://itnews.iu.edu/people/henschel.php" } ]
    },
    {
        "Name": "Cetus Source-to-Source Compiler Infrastructure",
        "id": 4,
        "image":ImgFour,
        "page":"https://engineering.purdue.edu/Cetus/",
        "Description": "Cetus is a compiler and transformation infrastructure for transforming C source code. The original purpose of Cetus was for automatic parallelization - translation of C code into C code annotated with OpenMP directives. Many other uses of the translator have emerged, such as the translation of OpenMP programs into CUDA and MPI.",
        "collaborators": [{"name":"Samuel Midkiff", "page":"https://engineering.purdue.edu/~smidkiff/"}, {"name":"Milind Kulkarni", "page":""}],
        "ResearchStaff": [{"name": "Akshay Bhosale", "Page":"http://akshayud.me/"},{"name": "Parinaz Barakhshan", "Page":"" }, {"name": "Jan Sher Khan","Page":"" }, {"name": "Hao Wang","Page":"" }  ]
    },
    {
        "Name": "Advanced Program Analysis for Parallelization",
        "id": 5,
        "image":ImgFive,
        "page":"http://subscripted-subscript.akshayud.me/",
        "Description": "In this project we develop novel compiler analysis techniques that gather information from the program that enables parallelization of code that could not be parallelized in the past. Our current focus in on analyzing properties of the content of subscript arrays.",
        "collaborators": [{"name":"No yet","Page":""}],
        "ResearchStaff": [{"name": "Akshay Bhosale", "Page":"http://akshayud.me/" }]
    }
 
];

export default function Tableinfo() {
  const classes = useStyles();
  return (
    <TableContainer  component={Paper}>
      <Table >
        <TableHead>
          <TableRow>
            <StyledTableCell>Nombre Completo</StyledTableCell>
            <StyledTableCell align="left">Cédula</StyledTableCell>
            <StyledTableCell align="left">Usuario</StyledTableCell>
            <StyledTableCell align="left">Estado</StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
              <Grid
                direction="row"
                >
                <Grid >
                {row.Name}
                </Grid >
                <Grid align="center" >
                <img className={classes.image} alt="ImgPerson" src={row.image} />
                </Grid>
                </Grid>
                  
              </StyledTableCell>
              <StyledTableCell align="left">{}</StyledTableCell>
              <StyledTableCell align="left">
             
              <Typography
                    className={classes.title}
                  
                    color="primary"
                  >
                    user1
                  </Typography>
            
              </StyledTableCell>
            
              <StyledTableCell align="left">
          
                
              </StyledTableCell>
              <StyledTableCell align="left">
          
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <IconButton color="primary" aria-label="upload picture" component="span">
                    <EditRoundedIcon />
                  </IconButton>
                </Grid>
                <Grid item xs={6}>
                  <IconButton color="primary" aria-label="upload picture" component="span">
                    <DeleteRoundedIcon />
                  </IconButton>
                </Grid>
              </Grid>

              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
