declare const _default: {
    type: string;
    $id: string;
    title: string;
    default: {};
    properties: {
        show: {
            type: string;
            default: boolean;
            title: string;
        };
        zlevel: {
            type: string;
            default: number;
            title: string;
        };
        z: {
            type: string;
            default: number;
            title: string;
            description: string;
        };
        orient: {
            type: string;
            title: string;
            enum: string[];
        };
        x: {
            type: string;
            default: string;
            title: string;
            description: string;
        };
        y: {
            type: string;
            default: string;
            title: string;
            description: string;
        };
        backgroundColor: {
            type: string;
            default: string;
            title: string;
            description: string;
        };
        borderColor: {
            type: string;
            default: string;
            title: string;
            description: string;
        };
        borderWidth: {
            type: string;
            default: number;
            title: string;
        };
        padding: {
            type: string;
            title: string;
            description: string;
        };
        itemGap: {
            type: string;
            title: string;
        };
        itemWidth: {
            type: string;
            default: number;
            title: string;
        };
        itemHeight: {
            type: string;
            default: number;
            title: string;
        };
        textStyle: {
            type: string;
            $ref: string;
        };
        data: {
            type: string;
            items: {
                type: string;
            };
        };
        dataDeg: {
            type: string;
            title: string;
            description: string;
        };
    };
};
export default _default;
