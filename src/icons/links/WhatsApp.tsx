import {SvgIcon, SvgIconProps, Theme} from "@mui/material";
import {useTheme} from "@mui/styles";

export default function WhatsApp(props: SvgIconProps) {
    const theme: Theme = useTheme();
    const { main } = theme?.palette?.primary || {};
    return (
        <SvgIcon viewBox="0 0 128 128" fontSize="large">
            <path d="M64 128C99.3462 128 128 99.3462 128 64C128 28.6538 99.3462 0 64 0C28.6538 0 0 28.6538 0 64C0 99.3462 28.6538 128 64 128Z" fill={main} />
            <path d="M92.346 35.4916C84.824 27.9616 74.823 23.8136 64.167 23.8086C42.213 23.8086 24.341 41.6766 24.334 63.6396C24.33 70.6616 26.165 77.5146 29.65 83.5526L24 104.195L45.115 98.6566C50.934 101.828 57.484 103.501 64.151 103.504H64.168C86.122 103.504 103.991 85.6326 104 63.6706C104.005 53.0286 99.864 43.0206 92.346 35.4916ZM64.168 96.7756H64.155C58.212 96.7736 52.386 95.1776 47.302 92.1616L46.093 91.4436L33.563 94.7306L36.906 82.5146L36.119 81.2586C32.804 75.9886 31.053 69.8976 31.057 63.6396C31.063 45.3866 45.916 30.5356 64.178 30.5356C73.022 30.5376 81.333 33.9866 87.585 40.2456C93.836 46.5036 97.276 54.8206 97.274 63.6676C97.268 81.9236 82.415 96.7756 64.168 96.7756ZM82.328 71.9806C81.332 71.4816 76.439 69.0766 75.526 68.7416C74.613 68.4096 73.952 68.2446 73.288 69.2406C72.624 70.2366 70.717 72.4796 70.135 73.1436C69.555 73.8076 68.975 73.8916 67.979 73.3926C66.983 72.8936 63.777 71.8436 59.978 68.4516C57.018 65.8146 55.02 62.5526 54.44 61.5566C53.86 60.5606 54.378 60.0236 54.877 59.5266C55.325 59.0806 55.873 58.3646 56.37 57.7826C56.867 57.2006 57.033 56.7856 57.365 56.1226C57.697 55.4586 57.532 54.8776 57.282 54.3796C57.032 53.8806 55.042 48.9816 54.214 46.9886C53.405 45.0476 52.585 45.3106 51.975 45.2806C51.393 45.2526 50.73 45.2446 50.067 45.2446C49.404 45.2446 48.325 45.4936 47.413 46.4906C46.502 47.4866 43.93 49.8936 43.93 54.7946C43.93 59.6926 47.496 64.4266 47.994 65.0896C48.492 65.7526 55.012 75.8076 64.996 80.1186C67.37 81.1426 69.225 81.7556 70.67 82.2156C73.054 82.9746 75.224 82.8656 76.94 82.6096C78.852 82.3246 82.828 80.2026 83.659 77.8776C84.488 75.5536 84.488 73.5616 84.237 73.1456C83.986 72.7286 83.322 72.4796 82.328 71.9806Z" fill="black" />
        </SvgIcon>
    )
}
