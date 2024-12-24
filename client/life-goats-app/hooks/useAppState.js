import { useContext } from 'react';
import { StateContext } from '../contexts/StateContext';

export function useAppState() {
  return useContext(StateContext);
}