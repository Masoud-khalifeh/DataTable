import React, { useEffect, useState } from 'react';
import './TableGrid.css';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { BiFirstPage, BiLastPage } from 'react-icons/bi';


const DataTable = ({ data, columns }) => {
    const [orderedData, setOrderedData] = useState("");
    const [page, setPage] = useState(0);


    function pagination(number) {
        let index = 0;
        let newData = [];
        for (let i = 0; i < (Math.ceil(data.length / number)); i++) {
            let eachElement = [];
            for (let j = 0; j < number; j++) {

                if (data[index]) {
                    eachElement.push(data[index]);
                    index = index + 1;
                }
            }
            newData.push(eachElement);
            eachElement = [];

        }
        setOrderedData(newData);
        setPage(0);

    }

    function handlePageChange(number) {
        setPage(number);
    }

    useEffect(() => {
        pagination(5)
    }, []);

    console.log("page", page);
    console.log("orderedData", orderedData);

    return (
        <section className='tableGridWhole'>
            <div className='tableGridSearch'></div>
            <div className='tableGridScroll'>
                <table className='tableGrid'>
                    <thead className='tableGridHead'>
                        <tr className='tableGridHeadRow'>
                            {columns.map((column, index) => (
                                <th key={index} className='tableGridHeadColumn'>{column.header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className='tableGridBody'>
                        {orderedData[page] && orderedData[page].map((row, rowIndex) => (
                            <tr key={rowIndex} className='tableGridBodyRow'>
                                {columns.map((column, colIndex) => (
                                    <td key={colIndex} className='tableGridBodyColumn'>{row[column.field]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='tableGridPagination'>

                    <div><p>{data.length} Total</p></div>
                    <div>
                        <button onClick={() => handlePageChange(0)}>
                            <BiFirstPage className='tableGridIcon' />
                        </button>
                        <button onClick={() => handlePageChange(page - 1)}>
                            <IoIosArrowBack className='tableGridIcon' />
                        </button>
                        {orderedData && orderedData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handlePageChange(index)}
                                className={page === index ? 'tableGridPaginationSelected' : ''}
                            >
                                {index + 1}
                            </button>
                        ))}
                        <button onClick={() => handlePageChange(page + 1)}>
                            <IoIosArrowForward className='tableGridIcon' />
                        </button>
                        <button onClick={() => handlePageChange(orderedData.length - 1)}>
                            <BiLastPage className='tableGridIcon' />
                        </button>
                    </div>
                    <div>
                        <select name="numbersShow" id="numbersShow" className='tableGridSelect'>
                            <option value="volvo" onClick={() => pagination(5)}>5 items per page</option>
                            <option value="volvo" onClick={() => pagination(10)}>10 items per page</option>
                            <option value="volvo" onClick={() => pagination(15)}>15 items per page</option>
                            <option value="volvo" onClick={() => pagination(20)}>20 items per page</option>
                        </select>
                    </div>

                </div>
        </section>
    );
};

export default DataTable;
