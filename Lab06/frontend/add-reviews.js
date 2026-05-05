const axios = require('axios');

async function run() {
  try {
    console.log("Đang tìm phim 'The Poor Little Rich Girl'...");
    const res = await axios.get('http://localhost:8000/api/v1/movies?title=The Poor Little Rich Girl');
    const movie = res.data.movies[0];
    
    if(!movie) {
      console.log('Không tìm thấy phim. Backend của bạn chưa nạp đủ dữ liệu hoặc sai tên.');
      return;
    }
    
    const id = movie._id;
    console.log('Đã tìm thấy phim với ID:', id);
    
    const reviews = [
      { movie_id: id, review: 'great movie', user_id: 'john_id', name: 'john' },
      { movie_id: id, review: 'bad222 movie', user_id: 'john_id', name: 'john' },
      { movie_id: id, review: 'nice!', user_id: 'jason_id', name: 'jason' },
      { movie_id: id, review: 'bad!', user_id: 'john_id', name: 'john' }
    ];
    
    for(let r of reviews) {
      await axios.post('http://localhost:8000/api/v1/movies/review', r);
      console.log('Đã thêm review:', r.review);
    }
    
    console.log("XONG! Bạn hãy quay lại giao diện web và bấm tải lại trang nhé.");
  } catch(e) {
    console.error("Có lỗi xảy ra:", e.message);
  }
}

run();
