import React, { useState } from 'react';
import {
    Form,
    Input,
    Button,
    Select,
    option,
    notification
} from 'antd';

import { addMenuApi } from '../../../../api/menu';
import { getAccessToken } from '../../../../api/auth';
import './AddMenuWebForm.scss';
import useSelection from 'antd/lib/table/hooks/useSelection';


export default function AddMenuWebForm(props) {

    const { setIsVisibleModal, setReloadMenuWeb } = props;

    const [menuWebData, setMenuWebData] = useState({});

    const addMenu = event => {
        event.preventDefault();

        let finalData = {
            title: menuWebData.title,
            url: (menuWebData.http ? menuWebData.http : "http://") + menuWebData.url
        }

        if (!finalData.title || !finalData.url || !menuWebData.url) {
            notification["error"]({
                message: "Todos los campos son onbligatorios"
            });
        } else {
            const accesToken = getAccessToken();
            finalData.active = false;
            finalData.order = 1000;

            addMenuApi(accesToken, finalData).then(response => {
                notification["success"]({
                    message: response
                });
                setIsVisibleModal(false);
                setReloadMenuWeb(true);
                setMenuWebData({});
                finalData={};
            }).catch(err=>{
                console.log(err);
                notification["error"]({
                    message: "Error del servidor"
                });
            })
        }
    }

    return (
        <div className="add-menu-web-form">
            <AddForm
                menuWebData={menuWebData}
                setMenuWebData={setMenuWebData}
                addMenu={addMenu}
                setReloadMenuWeb={setReloadMenuWeb}
            />
        </div>
    )
}

function AddForm(props) {

    const { menuWebData, setMenuWebData, addMenu, setReloadMenuWeb } = props;

    const { option } = Select;

    const selectBefore = (
        <Select
            defaultValue="http://"
            style={{ windth: 90 }}
            onChange={e => setMenuWebData({ ...menuWebData, http: e })}
        >
            <option value="http://">
                http://
            </option>
            <option value="https://">
                https://
            </option>
        </Select>
    );

    return (
        <Form className="form-add" onSubmitCapture={addMenu}>
            <Form.Item>
                <Input
                    // prefix={<icon/>}
                    placeholder="Titulo"
                    value={menuWebData.title}
                    onChange={e => setMenuWebData({ ...menuWebData, title: e.target.value })}
                />
            </Form.Item>
            <Form.Item>
                <Input
                    addonBefore={selectBefore}
                    placeholder="URL"
                    value={menuWebData.url}
                    onChange={e => setMenuWebData({ ...menuWebData, url: e.target.value })}
                />
            </Form.Item>
            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    className="btn-submit"
                >
                    Crear menú
                </Button>
            </Form.Item>
        </Form>
    )
}