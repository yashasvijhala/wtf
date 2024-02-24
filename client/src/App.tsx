import { Button, Input, Modal, Space, Table } from 'antd'
import React, { useState } from 'react'
import {
  useCreateBookMutation,
  useCreatePersonMutation,
  useGetPeopleQuery,
  useGetPersonByIdQuery
} from './generated/graphql'

const App: React.FC = () => {
  const { data: getPeople, refetch } = useGetPeopleQuery()

  const [createPerson] = useCreatePersonMutation()
  const [createBook] = useCreateBookMutation()
  const [isDetailsModalVisible, setIsDetailsModalVisible] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isBookModalVisible, setIsBookModalVisible] = useState(false)
  const [person, setPerson] = useState({
    name: '',
    age: 0
  })
  const [book, setBook] = useState({
    title: '',
    personId: ''
  })
  const { data: getPersonById } = useGetPersonByIdQuery({
    variables: {
      hey: book.personId
    }
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
            title: 'Action',
            key: 'action',
            render: (text: any, record: any) => (
              <Space size="middle">
                <Button
                  onClick={() => {
                    setIsBookModalVisible(true)
                    setBook(prev => ({
                      ...prev,
                      personId: record.id
                    }))
                  }}
                >
                  Add Book
                </Button>
                <Button
                  onClick={() => {
                    setIsDetailsModalVisible(true)
                    setBook(prev => ({
                      ...prev,
                      personId: record.id
                    }))
                  }}
                >
                  View Details
                </Button>
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
      <Modal
        open={isBookModalVisible}
        onCancel={() => setIsBookModalVisible(false)}
        onOk={async () => {
          await createBook({
            variables: {
              personId: book.personId,
              title: book.title
            }
          })
          setIsBookModalVisible(false)
          setBook({ personId: '', title: '' })
          refetch()
        }}
      >
        <Input
          type="text"
          placeholder="Title"
          value={book.title}
          onChange={e =>
            setBook(prev => ({
              ...prev,
              title: e.target.value
            }))
          }
        ></Input>
      </Modal>
      <Modal
        open={isDetailsModalVisible}
        onCancel={() => setIsDetailsModalVisible(false)}
        onOk={() => {
          setIsDetailsModalVisible(false)
        }}
      >
        <p>{getPersonById?.getPersonById.age}</p>
        <p>{getPersonById?.getPersonById.name}</p>
        <p>{getPersonById?.getPersonById.book?.title}</p>
        <p>{getPersonById?.getPersonById.id}</p>
      </Modal>
    </div>
  )
}

export default App
