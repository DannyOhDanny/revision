import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  photos: []
};

const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    addPhoto(state, action) {
      const existingPhoto = state.photos.find(
        photo => photo.id === action.payload.id
      );

      if (!existingPhoto) {
        state.photos.push(action.payload);
      }
    },
    removePhoto(state, action) {
      const photoIndex = state.photos.findIndex(
        photo => photo.id === action.payload.id
      );

      if (photoIndex !== -1) {
        state.photos.splice(photoIndex, 1);
      }
    }
  }
});
export const { addPhoto, removePhoto } = photosSlice.actions;
export default photosSlice.reducer;
