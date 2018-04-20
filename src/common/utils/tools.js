const tools = {
    /**
     * 日期格式化，格式化形如：2017-04-24T11:30:49.530Z
     * 格式化为：2017-04-24
     **/
    dateFormart(str) {
        return str ? str.substr(0, 10) : '--';
    },

    /**
     * 日期格式化，格式化形如：2017-04-24T11:30:49.530Z
     * 格式化为：2017-04-24 11:30:11
     **/
    dateFormartTime(str) {
        if (!str) { return '--'; }
        const temp = str.split('T');
        if (temp.length < 2) {
            return temp[0];
        }
        const tempTime = temp[1].split(':');
        let Hour = '';
        let tempTime0 = Number(tempTime[0]) + 8; // 服务器时间慢了8个小时
        if (tempTime0 > 24) {
            Hour = `0${Math.abs(24 - tempTime0)}`
        } else {
            Hour = tempTime0;
        }

        return `${temp[0]} ${Hour}:${tempTime[1]}:${tempTime[2].split('.')[0]}`;
    },

    /**
     * 字符串转日期
     * 日期格式化，格式化形如：2017-04-24T11:30:49.530Z
     * **/
    // str2date(str) {
    //     if (!str) { return new Date(); }
    //     const s = str.split('T');
    //     const d = s[0].split('-');
    //     const t = s[1].split('.')[0].split(':');

    //     return new Date(parseInt(d[0]), parseInt(d[1]) - 1, parseInt(d[2]), parseInt(t[0]), parseInt(t[1]), parseInt(t[2]));
    // },

    /**
     * 日期转字符串
     * **/
    date2str(date) {
        if (!date) {
            return null;
        }
        const year = date.getFullYear();
        const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
        const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

        return `${year}-${month}-${day}`;
    },

    /**
     * 时间转日期，去掉时分秒只要年月日
     * 返回结果还是date类型
     * **/
    t2d(date) {
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();

        return new Date(year, month, day);
    },

    /**
     *  两个时间之间的差值
     *  date1: 开始的时间
     *  date2: 结束的时间
     *  isEight1: date1是否需要+8小时
     *  isEight2: date2是否需要+8小时
     * **/
    getTimeSlot(date1, date2, isEight1 = false, isEight2 = false) {
        // 服务器时间慢了8个小时，所以要这么干
        let d1 = date1;
        let d2 = date2;
        if (isEight1) {
            d1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate(), date1.getHours() + 8, date1.getMinutes(), date1.getSeconds());
        }
        if (isEight2) {
            d2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate(), date2.getHours() + 8, date2.getMinutes(), date2.getSeconds());
        }
        let time = d2 - d1;
        let day = Math.floor(time / (1000 * 60 * 60 * 24)); // 相差的天数
        let s = Math.floor((time - day * (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // 去掉天后相差的小时
        let m = Math.floor(((time - day * (1000 * 60 * 60 * 24)) - s * (1000 * 60 * 60)) / (1000 * 60)); // 去掉天、时，剩下的分钟

        return `${day}天${s}时${m}分`;
    },

    /**
     * 当字符串长度超过指定值时截取字符串，用于表格中数据太长的情况
     * 没超过则返回原值
     * **/
    strSub(str, length = 100) {
        if (!str) {
            return '--';
        }
        if (str.length <= length) {
            return str;
        }

        return `${str.substr(0, length)}…`;
    },

    /**
     * 验证身份证
     *
     * 不能为空
     * **/
    //
    checkCardId(str) {
        if (!str) {
            return false;
        }
        const rex = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;

        return rex.test(str);
    },



    /**
     * 验证邮箱
     *
     * 可以为空
     * **/
    checkEmail(str) {
        if (!str) {
            return true;
        }
        const rex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        return rex.test(str);
    },

    /**
     * 验证手机
     *
     * 可以为空
     * **/
    checkMobile(str) {
        if (!str) {
            return true;
        }
        const rex = /^0?1[3|4|5|8][0-9]\d{8}$/;

        return rex.test(str);
    },

    /**
     * 验证字符串
     * 只能为整数或小数
     * 可以为空
     * **/
    checkFloat(str) {
        if (!str) {
            return true;
        }
        const rex = /^[0-9]+([.]{1}[0-9]+){0,1}$/;

        return rex.test(str);
    },
    /**
     * 验证字符串
     * 只能为数字
     * 可以为空
     * **/
    checkNum(str) {
        if (!str) {
            return true;
        }
        const rex = /^[0-9]+$/;

        return rex.test(str);
    },

    /**
     * 验证字符串
     * 只能为字母、数字
     * 可以为空
     * **/
    checkPureStr(str) {
        if (!str) {
            return true;
        }
        const rex = /^[a-zA-Z0-9]+$/;

        return rex.test(str);
    },

    /**
     * 验证字符串
     * 只能为汉字、字母、数字、下划线
     * 可以为空
     * **/
    checkStr(str) {
        if (!str) {
            return true;
        }
        const rex = /^[\u4e00-\u9fa5\s*._a-zA-Z0-9]+$/;

        return rex.test(str);
    },

    /** 字符串加密 **/
    compile(code) {
        let c = String.fromCharCode(code.charCodeAt(0) + code.length);
        for (let i = 1; i < code.length; i++) {
            c += String.fromCharCode(code.charCodeAt(i) + code.charCodeAt(i - 1));
        }

        return c;
    },
    /** 字符串解谜 **/
    uncompile(code) {
        let c = String.fromCharCode(code.charCodeAt(0) - code.length);
        for (let i = 1; i < code.length; i++) {
            c += String.fromCharCode(code.charCodeAt(i) - c.charCodeAt(i - 1));
        }

        return c;
    },

    /** 数字转日时分秒 **/
    sToDate(time) {
        const t = parseFloat(time);
        if (!t && t !== 0) {
            return '--';
        }

        const d = Math.floor(t / 60 / 60 / 24);
        const h = Math.floor((t - (d * 24 * 60 * 60)) / 60 / 60);
        const m = Math.floor((t - (d * 24 * 60 * 60) - (h * 60 * 60)) / 60);
        const s = Math.floor(t - (d * 24 * 60 * 60) - (h * 60 * 60) - (m * 60));
        let commit;
        if (d > 0) {
            commit = `${d}天${h}时${m}分${s}秒`;
        } else if (h > 0) {
            commit = `${h}时${m}分${s}秒`;
        } else if (m > 0) {
            commit = `${m}分${s}秒`;
        } else {
            commit = `${s}秒`;
        }

        return commit;
    },

    /** 去掉字符串两端空格 **/
    trim(str) {
        const reg = /^\s*|\s*$/g;

        return str.replace(reg, '');
    },
};
export default tools;
