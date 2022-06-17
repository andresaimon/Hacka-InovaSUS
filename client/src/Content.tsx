import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { DataGrid, GridColDef, GridColumns, GridToolbar } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { Chart } from "react-google-charts";
import { styled } from '@mui/material/styles';















const columns: GridColumns = [
    {
        field: 'id', headerName: 'ID', width: 100,
        headerClassName: 'super-app-theme--header'
    },

    {
        field: 'subagenda', headerName: 'Subagenda', width: 300,
        headerClassName: 'super-app-theme--header'
    },

    {
        field: 'link', headerName: 'Link', width: 300,
        headerClassName: 'super-app-theme--header'
    },

    {
        field: 'institutions', headerName: 'Instituições', type: 'list', width: 300,
        headerClassName: 'super-app-theme--header'
    },
];

const rows: Array<Object> = new Array<Object>();


const areas = [
    'Alimentação e Nutrição',
    'Ambiente, Trabalho e Saúde',
    'Assistência Farmacêutica',
    'Avaliação Pós-Incorporação',
    'Avaliação de Tecnologias e Economia da Saúde',
    'Bioética e Ética na Pesquisa',
    'Complexo Produtivo da Saúde',
    'Comunicação e Informação em Saúde',
    'Demografia e Saúde',
    'Desenvolvimento de Tecnologias e Inovação em Saúde',
    'Doenças Crônicas Não Transmissíveis', 'Doenças Transmissíveis',
    'Economia e Gestão em Saúde', 'Epidemiologia',
    'Gestão do Trabalho e Educação em Saúde',
    'Pesquisa Clínica',
    'Promoção da Saúde',
    'Saúde Bucal',
    'Saúde Materno Infantil',
    'Saúde Mental', 'Saúde da Criança e do Adolescente',
    'Saúde da Mulher', 'Saúde da Pessoa com Deficiência',
    'Saúde da População Negra e das Comunidades Tradicionais',
    'Saúde do Idoso', 'Saúde dos Povos Indígenas',
    'Sistemas, Programas e Políticas em Saúde',
    'Violência, Acidentes e Trauma'
]

let letter = "ABCDEFGHIGKLMNOPQRSTUVWXYZ";

for (let index = 0; index < areas.length; index++) {
    const element = areas[index];
    let rLetter = letter.charAt(Math.floor(Math.random() * letter.length));
    let rString = Array.from(Array(20), () => Math.floor(Math.random() * 36).toString(36)).join('');



    rows.push({
        id: index + 1,
        subagenda: element, ano: (1992 + index),
        institutions: [`UF${rLetter} - SE`],
        authors: [`Jon ${rString}`], link: `https://${rString}.com`,
    })
}









const data = [
    ["Instituição", "2010"],
   ['BR-SE',20]
  ];
const state = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO'
    ]
for (let index = 0; index < rows.length; index++) {
    const element = rows[index];
    
}

  const options = {
    title: "Estudos por UF",
    chartArea: { width: "50%" },
    hAxis: {
      title: "Estudos realizados",
      minValue: 0,
    },
    vAxis: {
      title: "Estado",
    },
    region: "BR",
    resolution: "provinces",
    colorAxis: { colors: ["#00853f", "black", "#e31b23"] },
    backgroundColor: "#81d4fa",
    datalessRegionColor: "#f0f7bb",
    defaultColor: "#f0f7c0",
  };







export default function Content() {



    return (
        <Box sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
            <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
            
            <div id="map"><Chart
                        chartType="GeoChart"
                        width="100%"
                        height="300px"
                        data={data}
                        options={options}
                    />
            </div>

                
                 
           
                <div style={{ height: 500, width: '100%' }}>
                    <Box
                        sx={{
                            height: 300,
                            width: '100%',

                            '& .super-app-theme--header': {
                                backgroundColor: 'rgba(0, 155, 229, 1)',
                                color:'white'
                            },
                        }}
                    >
                        <DataGrid
                            sx={{
                                height: 500,
                            }}
                            rows={rows}
                            columns={columns}
                            pageSize={10}
                            checkboxSelection
                            components={{
                                Toolbar: GridToolbar,
                            }}
                            onSelectionModelChange={(o) => console.log(o)}
                        />
                    </Box>
                </div>
            </Paper>
        </Box>

    );
}