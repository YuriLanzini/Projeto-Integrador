import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";

const NotaFiscal = ({
  onClose,
  totalValor,
  pedidoDetalhes,
  clienteInfo,
  metodoPagamento,
}) => {
  const [currentDate] = useState(new Date());
  const [notaFiscalItems, setNotaFiscalItems] = useState([]);

  const buildNotaFiscalItems = () => {
    const items = [];

    pedidoDetalhes.forEach((pedido) => {
      items.push({
        marca: pedido.marca,
        valor: pedido.valor,
        quantidade: pedido.quantidade,
      });
    });

    setNotaFiscalItems(items);
  };

  useEffect(() => {
    buildNotaFiscalItems();
  }, [pedidoDetalhes]);

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid black",
        borderRadius: "10px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "white",
        zIndex: "9999",
      }}
    >
      <h3>Nota Fiscal</h3>
      <p>Data: {currentDate.toLocaleDateString()}</p>
      <p>Hora: {currentDate.toLocaleTimeString()}</p>
      <p>
        <strong>Cliente:</strong>
      </p>
      <p>Nome: {clienteInfo.nome}</p>
      <p>CPF: {clienteInfo.cpf}</p>
      <p>Pagamento: {metodoPagamento}</p>
      <h4>Detalhes do Pedido:</h4>
      <ul>
        {notaFiscalItems.map((item, index) => (
          <li key={index}>
            <strong>Marca:</strong> {item.marca} | <strong>Valor:</strong> R${" "}
            {item.valor} | <strong>Quant.:</strong> {item.quantidade}
          </li>
        ))}
      </ul>
      <p>Total: R$ {totalValor}</p>
      <Button variant="contained" onClick={onClose}>
        Finalizar Compra
      </Button>
    </div>
  );
};

export default NotaFiscal;
