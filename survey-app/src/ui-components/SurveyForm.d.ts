/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SurveyFormInputValues = {};
export declare type SurveyFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SurveyFormOverridesProps = {
    SurveyFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type SurveyFormProps = React.PropsWithChildren<{
    overrides?: SurveyFormOverridesProps | undefined | null;
} & {
    onSubmit: (fields: SurveyFormInputValues) => void;
    onChange?: (fields: SurveyFormInputValues) => SurveyFormInputValues;
    onValidate?: SurveyFormValidationValues;
} & React.CSSProperties>;
export default function SurveyForm(props: SurveyFormProps): React.ReactElement;
