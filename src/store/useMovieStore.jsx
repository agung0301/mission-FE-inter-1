import { create } from 'zustand';
import api from '../services/api';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2000,
  background: '#141414',
  color: '#fff',
});

const useMovieStore = create((set, get) => ({
  myList: [],
  isLoading: false,
  isError: false,

  fetchMyList: async () => {
    set({ isLoading: true, isError: false });
    try {
      const response = await api.get('/my-list');
      set({ myList: response.data });
    } catch (error) {
      set({ isError: true });
    } finally {
      set({ isLoading: false });
    }
  },

  addMovie: async (movie) => {
    const { myList } = get();
    const isExisting = myList.find((m) => m.title === movie.title);

    if (isExisting) {
      Toast.fire({ icon: 'info', title: `${movie.title} Sudah Ada!` });
      return;
    }

    try {
      const response = await api.post('/my-list', { ...movie, isFavorite: false });
      set({ myList: [...myList, response.data] });
      Toast.fire({ icon: 'success', title: `Berhasil Menambah ${movie.title}` });
    } catch (error) {
      Toast.fire({ icon: 'error', title: `Gagal Menambah Film` });
    }
  },

  removeMovie: async (id) => {
    const { myList } = get();
    const movieToDelete = myList.find((item) => item.id === id);
    try {
      await api.delete(`/my-list/${id}`);
      set({ myList: myList.filter((item) => item.id !== id) });
      Toast.fire({ icon: 'warning', title: `${movieToDelete?.title} Dihapus` });
    } catch (error) {
      Toast.fire({ icon: 'error', title: `Gagal Hapus Film` });
    }
  },

  toggleFavorite: async (id) => {
    const { myList } = get();
    const movie = myList.find(m => m.id === id);
    const updatedMovie = { ...movie, isFavorite: !movie.isFavorite };

    set({ myList: myList.map(m => m.id === id ? updatedMovie : m) });

    try {
      await api.put(`/my-list/${id}`, updatedMovie);
    } catch (error) {
      set({ myList }); 
    }
  }
}));

export default useMovieStore;