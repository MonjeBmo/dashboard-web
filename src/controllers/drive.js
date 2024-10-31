export const format_date = (date) => {
  const new_date = new Date(date).toLocaleDateString("es-ES");
  return new_date;
};

export const format_date_only_day = (date) => {
  const new_date = new Date(date);
  return new_date.getDate();
};

export const get_unique_months = (dates) => {
  const months = dates.map((date) => {
    const new_date = new Date(date);
    return new_date.toLocaleString("es-ES", { month: "long" });
  });

  return [...new Set(months)]; // Devuelve meses únicos
};

// Función para generar un color RGBA aleatorio
export const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256); // Rojo entre 0 y 255
  const g = Math.floor(Math.random() * 256); // Verde entre 0 y 255
  const b = Math.floor(Math.random() * 256); // Azul entre 0 y 255
  const a = 0.5; // Transparencia fija o puedes hacerla aleatoria también
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};
