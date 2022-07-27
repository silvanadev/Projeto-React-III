import { useState, useEffect } from "react";

import "./comentarios.css";
import image from "../../assets/comentarios.svg";

import Header from "../../components/Header/Header";
import { FiTrash2, FiPlus } from "react-icons/fi";

function Comentarios() {
  const getLocalList = () => {
    let items = localStorage.getItem('list')
    if (items) {
        return JSON.parse(localStorage.getItem('list'))
    } else {
        return []
    }
  }
  const [list, setList] = useState(getLocalList);
  const [newItem, setNewItem] = useState("");

  function handleCreateNewItem() {
    const item = {
      id: Math.random(),
      title: newItem,
    };

    if (item.title === "") {
      return;
    }

    setList([...list, item]);
    setNewItem("");
  }

  function handleRemoveItem(id) {
    const itemsFiltered = list.filter((item) => item.id !== id);
    setList(itemsFiltered);
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  return (
    <>
      <Header image={image} description="ilustração lua e universo">
      </Header>
      <section className="list">
        <header>
          <h2>Dicas, Feedbacks e Mensagens</h2>
          <div className="input-container">
            <input
              type="text"
              placeholder="Digite aqui"
              onChange={(e) => setNewItem(e.target.value)}
              value={newItem}
            />
            <div className="add-container">
              <button
                className="add-task"
                type="submit"
                onClick={handleCreateNewItem}
              >
                <FiPlus size={16} color="#fff" />
              </button>
            </div>
          </div>
        </header>
        <main>
          <ul className="list-items">
            {list.map((item) => {
              return (
                <li key={item.id}>
                  <div>
                    <p>{item.title}</p>
                  </div>
                  <button
                    className="remove-task"
                    type="button"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <FiTrash2 size={16} />
                  </button>
                </li>
              );
            })}
          </ul>
        </main>
      </section>
    </>
  );
}

export default Comentarios;
