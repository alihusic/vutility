import {VALIDATION_ERROR, VALIDATION_LEVELS, VALIDATION_SUCCESS, VALIDATION_WARNING} from "./types";

export const validationSuccess = (message = null) => ({
    status: VALIDATION_SUCCESS,
    message,
});

export const validationError = (message = null) => ({
    status: VALIDATION_ERROR,
    message,
});

export const validationWarning = (message = null) => ({
    status: VALIDATION_WARNING,
    message,
});

export const getValidationStatus = (validationObject) => {
    let status = undefined;
    if (validationObject) {
        status = validationObject.status;
    }
    return status;
}

export const getValidationMessage = (validationObject) => {
    let message = undefined;
    if (validationObject) {
        message = validationObject.message;
    }
    return message;
}

export const getValidationMessageList = (validationObjectList = [], validationLevels = VALIDATION_LEVELS) => {
    let result = [];
    if (Array.isArray(validationObjectList)) {
        result = validationObjectList
            .filter(validationObject => validationLevels.includes(getValidationStatus(validationObject)))
            .map(validationObject => getValidationMessage(validationObject));
    }
    return result;
}

export const getValidationSuccessMessageList = (validationObjectList) => {
    return getValidationMessageList(validationObjectList, [VALIDATION_SUCCESS]);
}

export const getValidationErrorMessageList = (validationObjectList) => {
    return getValidationMessageList(validationObjectList, [VALIDATION_ERROR]);
}

export const getValidationWarningMessageList = (validationObjectList) => {
    return getValidationMessageList(validationObjectList, [VALIDATION_WARNING]);
}

export const isValidationSuccess = (validationObject) => {
    return getValidationStatus(validationObject) === VALIDATION_SUCCESS;
}

export const isValidationError = (validationObject) => {
    return getValidationStatus(validationObject) === VALIDATION_ERROR;
}

export const isValidationWarning = (validationObject) => {
    return getValidationStatus(validationObject) === VALIDATION_WARNING;
}