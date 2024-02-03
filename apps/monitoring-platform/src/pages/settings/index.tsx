import {FC, useEffect} from 'react'
import {Form, Divider, InputNumber, Button, Spin, Modal} from 'antd'
import {useSettingsForm} from "~/pages/settings/hooks/useSettingsForm.ts";


const Settings: FC<{}> = () => {

    const {
        setNumber,
        number,
        setExpirationTime,
        expirationTime,
        loading,
        reset,
        submit,
        isModalOpen,
        setIsModalOpen
    } = useSettingsForm()

    useEffect(() => {
        document.title = '设置'
    }, []);

    return <>
        <Spin spinning={loading}>

            <Form>
                <Divider orientation='left' plain>删除错误日志配置</Divider>
                <Form.Item style={{width: 300}} label={'按数量删除'}
                           extra={'当每条错误日志的条数达到该数量时将会被删除'}>
                    <InputNumber value={number} min={10} max={600} onChange={(value) => {
                        setNumber(value || 0)
                    }}/>
                </Form.Item>
                <Form.Item label={'按有效期删除'}
                           extra={'每一条错误日志的保留时间 当超过改时间将会被立即删除'}>
                    <InputNumber addonAfter={'天'} value={expirationTime} min={0} max={600} onChange={(value) => {
                        setExpirationTime(value || 0)
                    }}/>
                </Form.Item>
                <Form.Item>
                    <Button danger onClick={() => setIsModalOpen(true)} className='mr-9' type="primary">
                        保存
                    </Button>
                    <Button onClick={reset}>
                        重制
                    </Button>
                </Form.Item>
            </Form>

            <Modal title="谨慎删除错误日志" open={isModalOpen} onOk={submit} okText={'确定'}
                   okButtonProps={{danger: true}} cancelText={'取消'} onCancel={() => setIsModalOpen(false)}>
                <p>
                    <strong>不可逆操作： </strong>删除的错误日志将无法恢复。确保你不会因为操作失误而丢失了对未来故障的重要信息。
                </p>
                <p>
                    <strong>合规性： </strong>在进行删除之前，请确保你的操作符合任何适用的法规、合规性要求或公司政策。
                </p>
                <p>
                    <strong>备份： </strong>如有需要，在执行删除操作之前，请考虑备份当前的错误日志数据以便以后参考。
                </p>
                <p>
                    <strong>影响范围： </strong>删除错误日志可能会影响监控和故障排除。确保你的删除操作不会对系统的整体可用性和性能产生负面影响。
                </p>
            </Modal>
        </Spin>
    </>
}

export default Settings
