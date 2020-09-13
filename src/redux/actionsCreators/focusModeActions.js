import {
  FOCUS_MODE_ENABLE,
  FOCUS_MODE_DISABLE,
  IMMERSIVE_WRITING_ENABLE,
  IMMERSIVE_WRITING_DISABLE,
} from "../actions/actions";

export const enableFocusMode = () => {
  return {
    type: FOCUS_MODE_ENABLE,
    payload: true,
  };
};

export const disableFocusMode = () => {
  return {
    type: FOCUS_MODE_DISABLE,
    payload: false,
  };
};

export const enableImmersiveWriting = () => {
  return {
    type: IMMERSIVE_WRITING_ENABLE,
    payload: true,
  };
};

export const disableImmersiveWriting = () => {
  return {
    type: IMMERSIVE_WRITING_DISABLE,
    payload: false,
  };
};
