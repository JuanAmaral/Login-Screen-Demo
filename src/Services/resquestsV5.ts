import { AxiosError } from "axios"
// import { v5 } from "./Api"


// export const recolhimentoPost = async (val: number, tipe: "T" | "A", passWord: string) => {
//     const res = await v5.post(`/solicitacao_recolhe/`, {
//         valor: val,
//         tipo: tipe,
//         senha: passWord

//     }).catch((err) => err as AxiosError)

//     if (!(res instanceof Error)) {
//         return {data:res.data.detail}
//     } else {
//         return res?.response?.status == 403 || res?.response?.status == 401 ? { error: "Sessão inválida, Faça logout"} : {error: res.response?.data.detail};
//     }

// }


