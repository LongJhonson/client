import React, { useEffect, useState } from 'react';
import {
    Switch,
    List,
    Button,
    Modal as ModalAntd,
    notification
} from 'antd';
import DragSortableList from 'react-drag-sortable';
import Modal from '../../../Modal';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { updateMenuApi, activateMenuApi, deleteMenuApi } from "../../../../api/menu"
import { getAccessToken } from "../../../../api/auth";
import AddMenuWebForm from '../AddMenuWebForm';
import EditMenuWebForm from '../EditMenuWebForm';

import './MenuWebList.scss';

const { confirm } = ModalAntd;


export default function MenuWebList(props) {
    const { menu, setReloadMenuWeb } = props;

    const [listItems, setListItems] = useState([]);

    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState(null);

    console.log(listItems);

    useEffect(() => {
        const listItemsArray = [];

        menu.forEach(item => {
            listItemsArray.push({
                content: (<MenuItem
                    item={item}
                    activateMenu={activateMenu}
                    editMenuWebModal={editMenuWebModal}
                    deleteMenu={deleteMenu}

                />)
            })
        });
        setListItems(listItemsArray);
    }, [menu])

    const activateMenu = (menu, status) => {
        const accessToken = getAccessToken();
        activateMenuApi(accessToken, menu._id, status).then(response => {
            notification["success"]({
                message: response
            });
        });
    }

    const onSort = (sortedList, dropEvent) => {
        const accessToken = getAccessToken();

        sortedList.forEach(item => {
            console.log(item);
            const { _id } = item.content.props.item;
            const order = item.rank;
            updateMenuApi(accessToken, _id, { order });
        })
    }

    const addMenuWebModal = () => {
        setIsVisibleModal(true);
        setModalTitle("Creando nuevo menu");
        setModalContent(
            <AddMenuWebForm
                setIsVisibleModal={setIsVisibleModal}
                setReloadMenuWeb={setReloadMenuWeb}
            />
        )
    }

    const deleteMenu = (menu) => {
        const accessToken = getAccessToken();
        confirm({
            title: "Eliminando menu",
            content: `Estas seguro de que quieres eliminar el menu ${menu.title}`,
            okText: "Eliminar",
            okType: "danger",
            cancelText: "Cancelar",
            onOk(){
                deleteMenuApi(accessToken, menu._id).then(response=>{
                    notification["success"]({
                        message: response
                    });
                    setReloadMenuWeb(true);
                }).catch(()=>{
                    notification["error"]({
                        message: "Error del servidor"
                    });
                })
            }
        });
    }

    const editMenuWebModal = (menu) => {
        setIsVisibleModal(true);
        setModalTitle(`Editando menu ${menu.title}`);
        setModalContent(
            <EditMenuWebForm
                setIsVisibleModal={setIsVisibleModal}
                setReloadMenuWeb={setReloadMenuWeb}
                menu={menu}
            />
        )
    }

    return (
        <div className="menu-web-list">
            <div className="menu-web-list__header">
                <Button onClick={addMenuWebModal} type="primary">Nuevo menu</Button>
            </div>
            <div className="menu-web-list__items">
                <DragSortableList
                    items={listItems}
                    onSort={onSort}
                    type="vertical"
                />
            </div>
            <Modal
                title={modalTitle}
                isVisible={isVisibleModal}
                setIsVisible={setIsVisibleModal}
            >
                {modalContent}
            </Modal>
        </div>
    )
}

function MenuItem(props) {
    const { item, activateMenu, editMenuWebModal, deleteMenu } = props;

    return (
        <List.Item
            actions={[
                <Switch defaultChecked={item.active} onChange={e => activateMenu(item, e)} />,
                <Button type="primary" onClick={() => editMenuWebModal(item)}><EditOutlined /></Button>,
                <Button onClick={() => { deleteMenu(item) }} type="danger"><DeleteOutlined /></Button>
            ]}
        >
            <List.Item.Meta
                title={item.title}
                description={item.url}
            />
        </List.Item>
    )
}