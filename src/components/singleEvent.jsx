export const SingleEvent = (data) => {
  return (
    <div>
      SingleEvent
      <p>Judul: {data.events.events.title}</p>
      <p>Deskripsi: {data.events.events.description}</p>
      <img src={data.events.events.image} alt="gambar event" />
      <p>Tanggal dan Waktu: {data.events.events.dateTime}</p>
    </div>
  );
};
