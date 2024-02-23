import { Button, Input, Modal, Space, Table } from 'antd'
import React, { useState } from 'react'
import { useCreatePersonMutation, useGetPeopleQuery } from './generated/graphql'

const App: React.FC = () => {
  const { data: getPeople, refetch } = useGetPeopleQuery()
  const [createPerson] = useCreatePersonMutation()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [person, setPerson] = useState({
    name: '',
    age: 0
  })

  return (
    <div className="App">
      <Button
        type="primary"
        style={{
          marginTop: '8px',
          marginBottom: '15px',
          marginLeft: '8px',
          marginRight: '6px'
        }}
        onClick={() => setIsModalVisible(true)}
      >
        Create Person
      </Button>
      <Table
        dataSource={getPeople?.getPeople}
        columns={[
          {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
          },
          {
            title: 'Age',
            dataIndex: 'age',
            key: 'age'
          },
          {
            title: 'Action',
            key: 'action',
            render: (text: any, record: any) => (
              <Space size="middle">
                <Button onClick={() => {}}>Add Book</Button>
              </Space>
            )
          }
        ]}
      />
      <Modal
        title="Create Person"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onOk={async () => {
          await createPerson({
            variables: {
              name: person.name,
              age: parseInt(person.age.toString(), 10)
            }
          })
          setIsModalVisible(false)
          setPerson({ name: '', age: 0 })
          refetch()
        }}
      >
        <Input
          placeholder="Name"
          value={person.name}
          onChange={e =>
            setPerson(prevPerson => ({
              ...prevPerson,
              name: e.target.value,
              age: prevPerson.age
            }))
          }
        />
        <Input
          placeholder="Age"
          type="number"
          value={person.age.toString()}
          onChange={e =>
            setPerson(prevPerson => ({
              ...prevPerson,
              age: parseInt(e.target.value, 10) || 0
            }))
          }
        />
      </Modal>
    </div>
  )
}

export default App
