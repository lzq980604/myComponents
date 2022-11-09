import { useState } from 'react';
import { Table } from 'antd';
import styles from './index.less'
function DetailTable() {
    const [selectIndex, setSelectIndex] = useState(0);
    const columns = (index) => [
        {
            title: 'Name',
            dataIndex: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Age',
            dataIndex: 'age',
        },
        {
            title: 'Home phone',
            dataIndex: 'tel',
            onCell: (_, index) => {
                if (index === 0) {
                    return {
                        rowSpan: 5,
                    };
                }
                return { rowSpan: 0 };
            },
            render: () => {
                const current = data[index];
                return <div>
                    <div>name：{current.name}</div>
                    <div>age：{current.age}</div>
                    <div>phone：{current.phone}</div>
                    <div>address：{current.address}</div>
                </div>
            }

        }
    ];
    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            tel: '0571-22098909',
            phone: 18889898989,
            address: 'New York No. 1 Lake Park',
        },
        {
            key: '2',
            name: 'Jim Green',
            tel: '0571-22098333',
            phone: 18889898888,
            age: 42,
            address: 'London No. 1 Lake Park',
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            tel: '0575-22098909',
            phone: 18900010002,
            address: 'Sidney No. 1 Lake Park',
        },
        {
            key: '4',
            name: 'Jim Red',
            age: 18,
            tel: '0575-22098909',
            phone: 18900010002,
            address: 'London No. 2 Lake Park',
        },
        {
            key: '5',
            name: 'Jake White',
            age: 18,
            tel: '0575-22098909',
            phone: 18900010002,
            address: 'Dublin No. 2 Lake Park',
        },
    ];
    return (
        <div className={styles.detailTableBox}>
            <Table
                columns={columns(selectIndex)}
                dataSource={data}
                bordered
                onRow={(record, index) => {
                    return {
                        onClick: event => {
                            setSelectIndex(index)
                        },
                    };
                }}
                rowClassName={(record, index) => {
                    if (index === selectIndex) return `${styles.selectedRow}`;
                    return '';
                }}
            />
        </div>
    );
}

export default DetailTable;