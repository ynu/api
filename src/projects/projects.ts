import axios from 'axios';
import Debug from 'debug';
import {GetToken, getToken} from "../index";
import {filterNullParams} from "../util";
import {ProjectsBasicParams, ProjectsBasicResult} from "./type/projects_basic";

const debug = Debug('ids::debug');

/**
 * 查询项目合同的基本信息
 */
export const getProjectsBasicList = async (params: ProjectsBasicParams, options: GetToken): Promise<ProjectsBasicResult[] | any> => {
    const token = await getToken(options);
    const res = await axios.get(`${options.host}/v1/projects/basic_contract`, {
        headers: {
            Authorization: token,
        },
        params: filterNullParams(params)
    });
    return res.data.data;
}

