import React from 'react';
import './TableGrid.css';
import {  IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { BiFirstPage, BiLastPage } from 'react-icons/bi';


const DataTable = ({ data, columns }) => {
    return (
        <section className='tableGridWhole'>
            <div className='tableGridSearch'></div>
            <table className='tableGrid'>
                <thead className='tableGridHead'>
                    <tr className='tableGridHeadRow'>
                        {columns.map((column, index) => (
                            <th key={index} className='tableGridHeadColumn'>{column.header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className='tableGridBody'>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex} className='tableGridBodyRow'>
                            {columns.map((column, colIndex) => (
                                <td key={colIndex} className='tableGridBodyColumn'>{row[column.field]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='tableGridPagination'>
                <div><p>120 Total</p></div>
                <div>
                    <button><BiFirstPage className='tableGridIcon'/></button>
                    <button><IoIosArrowBack className='tableGridIcon' /></button>
                    <button className='tableGridPaginationSelected'>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                    <button><IoIosArrowForward className='tableGridIcon'/></button>
                    <button><BiLastPage className='tableGridIcon'/></button>

                    <select name="numbersShow" id="numbersShow" className='tableGridSelect'>
                        <option value="volvo">5 items per page</option>
                        <option value="volvo">10 items per page</option>
                        <option value="volvo">15 items per page</option>
                        <option value="volvo">20 items per page</option>
                    </select>
                </div>
            </div>
        </section>
    );
};

export default DataTable;
