import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Photo {
  id: string;
}

interface PhotosState {
  photos: Photo[];
}

const initialState: PhotosState = {
  photos: []
};

const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    addPhoto(state, action: PayloadAction<Photo>) {
      const existingPhoto = state.photos.find(
        photo => photo.id === action.payload.id
      );

      if (!existingPhoto) {
        state.photos.push(action.payload);
      }
    },
    removePhoto(state, action: PayloadAction<Photo>) {
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
