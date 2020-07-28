import React from 'react'

const SvgIcons = ({ iconType }) => {

    let pathValue = null;

    switch (iconType) {
        case 'NEW':
            pathValue = "M86,14.33333c-39.49552,0 -71.66667,32.17115 -71.66667,71.66667c0,39.49552 32.17115,71.66667 71.66667,71.66667c39.49552,0 71.66667,-32.17115 71.66667,-71.66667c0,-39.49552 -32.17115,-71.66667 -71.66667,-71.66667zM86,28.66667c31.74921,0 57.33333,25.58412 57.33333,57.33333c0,31.74921 -25.58412,57.33333 -57.33333,57.33333c-31.74921,0 -57.33333,-25.58412 -57.33333,-57.33333c0,-31.74921 25.58412,-57.33333 57.33333,-57.33333zM78.83333,50.16667v28.66667h-28.66667v14.33333h28.66667v28.66667h14.33333v-28.66667h28.66667v-14.33333h-28.66667v-28.66667z";
            break;
        case 'SNAPSHOT':
            pathValue = "M107.486,14.31934l-43,0.04199l-13.14355,14.30534h-22.67578c-7.88333,0 -14.33333,6.45 -14.33333,14.33333v86c0,7.88333 6.45,14.33333 14.33333,14.33333h114.66667c7.88333,0 14.33333,-6.45 14.33333,-14.33333v-86c0,-7.88333 -6.45,-14.33333 -14.33333,-14.33333h-22.61979zM101.20117,28.65267l13.22754,14.34733h28.90462v86h-114.66667v-86h28.97461l13.15755,-14.31934zM86,50.16667c-19.78717,0 -35.83333,16.04617 -35.83333,35.83333c0,19.78717 16.04617,35.83333 35.83333,35.83333c19.78717,0 35.83333,-16.04617 35.83333,-35.83333c0,-19.78717 -16.04617,-35.83333 -35.83333,-35.83333zM86,64.5c11.87517,0 21.5,9.62483 21.5,21.5c0,11.87517 -9.62483,21.5 -21.5,21.5c-11.87517,0 -21.5,-9.62483 -21.5,-21.5c0,-11.87517 9.62483,-21.5 21.5,-21.5z";
            break;
        case 'CLEAR':
            pathValue = "M71.66667,14.33333l-7.16667,7.16667h-35.83333v14.33333h7.16667v107.5c0,3.74259 1.37119,7.55804 4.07324,10.26009c2.70205,2.70205 6.5175,4.07324 10.26009,4.07324h71.66667c3.74259,0 7.55804,-1.37119 10.26009,-4.07324c2.70205,-2.70206 4.07324,-6.5175 4.07324,-10.26009v-107.5h7.16667v-14.33333h-35.83333l-7.16667,-7.16667zM50.16667,35.83333h71.66667v107.5h-71.66667zM64.5,50.16667v78.83333h14.33333v-78.83333zM93.16667,50.16667v78.83333h14.33333v-78.83333z";
            break;
        case 'H1':
            pathValue = "M6.88,34.4c-1.89469,0 -3.44,1.54531 -3.44,3.44v96.32c0,1.90813 1.54531,3.44 3.44,3.44h24.08c1.89469,0 3.44,-1.53187 3.44,-3.44v-34.4h34.4v34.4c0,1.90813 1.54531,3.44 3.44,3.44h24.08c1.90813,0 3.44,-1.53187 3.44,-3.44v-96.32c0,-1.89469 -1.53187,-3.44 -3.44,-3.44h-24.08c-1.89469,0 -3.44,1.54531 -3.44,3.44v34.4h-34.4v-34.4c0,-1.89469 -1.54531,-3.44 -3.44,-3.44zM141.04,34.4c-0.68531,0 -1.37062,0.16125 -1.935,0.5375l-27.52,16.77c-0.95406,0.645 -1.505,1.76031 -1.505,2.9025v21.07c0,1.26313 0.71219,2.40531 1.8275,3.01c1.11531,0.60469 2.48594,0.59125 3.5475,-0.1075l22.145,-13.115v68.6925c0,1.90813 1.53188,3.44 3.44,3.44h24.08c1.90813,0 3.44,-1.53187 3.44,-3.44v-96.32c0,-1.89469 -1.53187,-3.44 -3.44,-3.44z";
            break;
        case 'H2':
            pathValue = "M13.76,44.72c-1.89469,0 -3.44,1.54531 -3.44,3.44v75.68c0,1.90813 1.54531,3.44 3.44,3.44h20.64c1.89469,0 3.44,-1.53187 3.44,-3.44v-27.52h20.64v27.52c0,1.90813 1.54531,3.44 3.44,3.44h20.64c1.89469,0 3.44,-1.53187 3.44,-3.44v-75.68c0,-1.89469 -1.54531,-3.44 -3.44,-3.44h-20.64c-1.89469,0 -3.44,1.54531 -3.44,3.44v27.52h-20.64v-27.52c0,-1.89469 -1.54531,-3.44 -3.44,-3.44zM130.8275,44.72c-18.85281,0 -31.0675,10.68281 -31.0675,27.52c0,1.89469 1.53188,3.44 3.44,3.44h17.0925c1.90813,0 3.44,-1.54531 3.44,-3.44v-0.3225c0,-4.1925 1.98875,-6.1275 6.3425,-6.1275c4.12531,0 6.665,2.08281 6.665,5.59c0,2.76813 -1.80062,5.59 -12.47,15.48l-23.435,21.93c-0.69875,0.645 -1.075,1.62594 -1.075,2.58v12.47c0,1.90813 1.53188,3.44 3.44,3.44h55.04c1.90813,0 3.44,-1.53187 3.44,-3.44v-13.76c0,-1.90812 -1.53187,-3.44 -3.44,-3.44h-23.7575l8.17,-6.9875c13.84063,-12.3625 19.0275,-20.425 19.0275,-29.67c0,-14.88875 -12.67156,-25.2625 -30.8525,-25.2625z";
            break;
        case 'H3':
            pathValue = "M24.08,51.6c-1.89469,0 -3.44,1.54531 -3.44,3.44v61.92c0,1.90813 1.54531,3.44 3.44,3.44h13.76c1.89469,0 3.44,-1.53187 3.44,-3.44v-20.64h20.64v20.64c0,1.90813 1.54531,3.44 3.44,3.44h13.76c1.89469,0 3.44,-1.53187 3.44,-3.44v-61.92c0,-1.89469 -1.54531,-3.44 -3.44,-3.44h-13.76c-1.89469,0 -3.44,1.54531 -3.44,3.44v20.64h-20.64v-20.64c0,-1.89469 -1.54531,-3.44 -3.44,-3.44zM122.4425,51.6c-21.32531,0 -25.96125,11.13969 -26.1225,20.5325c-0.01344,0.92719 0.3225,1.81406 0.9675,2.4725c0.645,0.65844 1.54531,1.075 2.4725,1.075h13.76c1.85438,0 3.37281,-1.47812 3.44,-3.3325c0.05375,-1.58562 1.66625,-3.5475 5.16,-3.5475c3.9775,0 5.4825,3.82969 5.4825,4.73c0,2.66063 -2.17687,5.59 -5.375,5.59h-5.2675c-1.90812,0 -3.44,1.54531 -3.44,3.44v6.88c0,1.90813 1.53188,3.44 3.44,3.44h5.2675c4.27313,0 6.235,2.82188 6.235,5.4825c0,2.82188 -2.48594,4.8375 -6.02,4.8375c-3.7625,0 -5.40187,-1.77375 -5.4825,-3.5475c-0.08062,-1.8275 -1.59906,-3.3325 -3.44,-3.3325h-15.05c-0.94062,0 -1.8275,0.38969 -2.4725,1.075c-0.645,0.67188 -1.00781,1.53188 -0.9675,2.4725c0.43,9.33906 5.52281,20.5325 27.1975,20.5325c17.96594,0 29.1325,-7.92812 29.1325,-20.7475c0,-6.96062 -3.34594,-12.56406 -9.03,-15.5875c3.58781,-3.13094 5.59,-7.94156 5.59,-13.76c0,-11.70406 -9.55406,-18.705 -25.4775,-18.705z";
            break;
        case 'BOLD':
            pathValue = "M140.87875,89.17125c-3.225,-4.70312 -7.64594,-8.41187 -13.19562,-11.0725c3.42656,-2.41875 6.22156,-5.21375 8.37156,-8.35812c3.41313,-5.01219 5.14656,-11.2875 5.14656,-18.65125c0,-6.69188 -1.15562,-12.44313 -3.41312,-17.10594c-2.29781,-4.74344 -5.59,-8.6 -9.7825,-11.46219c-4.07156,-2.78156 -8.97625,-4.81062 -14.60656,-6.00656c-5.41531,-1.15562 -11.47563,-1.74687 -17.99281,-1.74687h-62.41719c-1.89469,0 -3.44,1.53187 -3.44,3.44v132.62812c0,1.89469 1.54531,3.44 3.44,3.44h64.27156c6.22156,0 12.3625,-0.79281 18.24812,-2.35156c6.00656,-1.58563 11.43531,-4.07156 16.15188,-7.37719c4.82406,-3.39969 8.7075,-7.83406 11.55625,-13.18219c2.84875,-5.36156 4.3,-11.75781 4.3,-18.97375c0,-8.96281 -2.24406,-16.77 -6.63813,-23.22zM62.14844,40.86344h27.31844c2.59344,0 5.10625,0.215 7.525,0.645c2.40531,0.44344 4.54187,1.22281 6.40969,2.32469c1.85437,1.11531 3.3325,2.67406 4.44781,4.64937c1.11531,1.98875 1.67969,4.52844 1.67969,7.61906c0,5.57656 -1.67969,9.59437 -5.02563,12.06687c-3.34594,2.48594 -7.61906,3.72219 -12.81937,3.72219h-29.53563zM113.14375,119.25781c-1.16906,2.23062 -2.75469,3.99094 -4.73,5.29437c-1.98875,1.30344 -4.27312,2.23063 -6.88,2.795c-2.59344,0.55094 -5.32125,0.83313 -8.17,0.83313h-31.21531v-36.41563h31.76625c6.32906,0 11.395,1.46469 15.23813,4.36719c3.84312,2.91594 5.76469,7.78031 5.76469,14.59312c-0.01344,3.45344 -0.60469,6.30219 -1.77375,8.53281z";
            break;
        case 'ITALIC':
            pathValue = "M108.48197,158.76923h-80.70253l3.30769,-12.55889c1.98978,0 5.29747,-0.67188 8.60517,-0.67188c3.97957,0 5.94351,-0.67187 7.93329,-1.31791c2.66166,-1.3179 4.6256,-2.66165 5.96935,-3.97956c1.3179,-1.98978 2.63581,-3.95372 3.30769,-6.61538l23.79988,-93.26142c0.67187,-2.66166 0.67187,-4.65144 0,-5.96935c-0.64603,-1.98978 -1.98978,-3.30769 -3.95372,-4.6256c-1.34375,-0.67187 -3.97957,-1.31791 -6.61538,-1.98978c-3.30769,-0.64603 -6.61538,-1.31791 -8.60517,-1.31791l3.30769,-13.23077h80.70253l-3.30769,13.23077c-1.98978,0 -7.28726,0.67188 -10.59495,0.67188c-3.30769,0.64603 -5.94351,0.64603 -7.93329,1.3179c-2.63582,0.64604 -5.29747,1.98979 -6.61538,3.95373c-1.31791,1.98978 -2.63582,3.97956 -2.63582,6.61538l-23.82572,93.28726c-0.64603,2.63582 -0.64603,4.6256 0,6.61538c0.67187,1.98978 1.98978,3.30769 3.97956,3.97957c1.31791,0.64603 3.30769,1.3179 6.61538,1.96394c3.30769,0.67187 8.60517,0.67187 10.56912,1.34375z";
            break;
        case 'STRIKETROUGH':
            pathValue = "M19.26042,0v22.84375h52.40625v77.48958h-57.33333v14.33333h57.33333v57.33333h28.66667v-57.33333h57.33333v-14.33333h-57.33333v-77.48958h53.07813v-22.84375z";
            break;
        case 'CODE':
            pathValue = "M35.83333,21.5c-7.91917,0 -14.33333,6.41417 -14.33333,14.33333v100.33333c0,7.90483 6.4285,14.33333 14.33333,14.33333h100.33333c7.90483,0 14.33333,-6.4285 14.33333,-14.33333v-100.33333c0,-7.91917 -6.41417,-14.33333 -14.33333,-14.33333zM35.83333,35.83333h100.33333v14.33333h-100.33333zM35.83333,64.5h100.33333v71.66667h-100.33333zM71.66667,77.34961l-22.98372,22.98372l22.98372,22.98372l7.16667,-7.16667l-15.81706,-15.81706l15.81706,-15.81706zM100.33333,77.34961l-7.16667,7.16667l15.81706,15.81706l-15.81706,15.81706l7.16667,7.16667l22.98372,-22.98372z";
            break;
        case 'LINK':
            pathValue = "M129.82692,1.03365c-10.77584,0.51683 -21.13822,5.21996 -29.14904,13.23077l-31.42308,31.42308c4.9357,-4.96154 23.25721,-1.55048 27.70192,2.89423l19.01923,-19.01923c4.21214,-4.21214 9.48378,-6.79628 14.88462,-7.02885c3.66947,-0.18089 8.86358,0.59435 13.4375,5.16827c4.26382,4.26382 5.16827,9.22536 5.16827,12.61058c0,5.65926 -2.58413,11.29267 -7.02885,15.71154l-33.07692,33.28365c-8.32091,8.32092 -20.98317,8.99279 -28.32212,1.65385c-4.18629,-4.18629 -11.08594,-4.21214 -15.29808,0c-4.21214,4.21214 -4.21214,11.08594 0,15.29808c7.54567,7.54567 17.46875,11.37019 27.70192,11.37019c11.0601,0 22.35276,-4.52224 31.00962,-13.23077l33.28365,-33.07692c8.45012,-8.42428 13.23077,-19.6911 13.23077,-31.00962c0,-10.51743 -3.97956,-20.51803 -11.37019,-27.90865c-7.90745,-7.90745 -18.52824,-11.88702 -29.76923,-11.37019zM78.55769,54.37019c-11.0601,0 -22.53365,4.54808 -31.21635,13.23077l-33.07692,33.07692c-8.45012,8.42428 -13.23077,19.69111 -13.23077,31.00962c0,10.51743 3.97957,20.51803 11.37019,27.90865c7.90746,7.90746 18.52824,11.88702 29.76923,11.37019c10.77584,-0.51683 21.13822,-5.21995 29.14904,-13.23077l31.42308,-31.42308c-4.96154,4.96154 -23.25721,1.55048 -27.70192,-2.89423l-19.01923,19.01923c-4.21214,4.21214 -9.48378,6.77044 -14.88462,7.02885c-3.66947,0.18089 -8.86358,-0.59435 -13.4375,-5.16827c-4.26382,-4.26382 -5.16827,-9.2512 -5.16827,-12.61058c0,-5.65926 2.58413,-11.29267 7.02885,-15.71154l33.07692,-33.28365c8.32092,-8.32091 20.98317,-8.96695 28.32212,-1.65385c4.21214,4.21214 11.11178,4.21214 15.29808,0c4.21214,-4.21214 4.21214,-11.08594 0,-15.29808c-7.54567,-7.54567 -17.49459,-11.37019 -27.70192,-11.37019z";
            break;
        case 'LIST':
            pathValue = "M22.93333,28.66667c-6.33287,0 -11.46667,5.1338 -11.46667,11.46667c0,6.33287 5.1338,11.46667 11.46667,11.46667c6.33287,0 11.46667,-5.1338 11.46667,-11.46667c0,-6.33287 -5.1338,-11.46667 -11.46667,-11.46667zM57.33333,34.4c-2.06765,-0.02924 -3.99087,1.05709 -5.03322,2.843c-1.04236,1.78592 -1.04236,3.99474 0,5.78066c1.04236,1.78592 2.96558,2.87225 5.03322,2.843h97.46667c2.06765,0.02924 3.99087,-1.05709 5.03322,-2.843c1.04236,-1.78592 1.04236,-3.99474 0,-5.78066c-1.04236,-1.78592 -2.96558,-2.87225 -5.03322,-2.843zM22.93333,74.53333c-6.33287,0 -11.46667,5.1338 -11.46667,11.46667c0,6.33287 5.1338,11.46667 11.46667,11.46667c6.33287,0 11.46667,-5.1338 11.46667,-11.46667c0,-6.33287 -5.1338,-11.46667 -11.46667,-11.46667zM57.33333,80.26667c-3.17053,0 -5.73333,2.5628 -5.73333,5.73333c0,3.17053 2.5628,5.73333 5.73333,5.73333h42.13776c8.858,-7.16093 20.12051,-11.46667 32.39558,-11.46667zM131.86667,91.73333c-22.16507,0 -40.13333,17.96827 -40.13333,40.13333c0,22.16507 17.96827,40.13333 40.13333,40.13333c22.16507,0 40.13333,-17.96827 40.13333,-40.13333c0,-22.16507 -17.96827,-40.13333 -40.13333,-40.13333zM131.86667,108.93333c3.1648,0 5.73333,2.5628 5.73333,5.73333v11.46667h11.46667c3.1648,0 5.73333,2.5628 5.73333,5.73333c0,3.17053 -2.56853,5.73333 -5.73333,5.73333h-11.46667v11.46667c0,3.17053 -2.56853,5.73333 -5.73333,5.73333c-3.1648,0 -5.73333,-2.5628 -5.73333,-5.73333v-11.46667h-11.46667c-3.1648,0 -5.73333,-2.5628 -5.73333,-5.73333c0,-3.17053 2.56853,-5.73333 5.73333,-5.73333h11.46667v-11.46667c0,-3.17053 2.56853,-5.73333 5.73333,-5.73333zM22.93333,120.4c-6.33287,0 -11.46667,5.1338 -11.46667,11.46667c0,6.33287 5.1338,11.46667 11.46667,11.46667c6.33287,0 11.46667,-5.1338 11.46667,-11.46667c0,-6.33287 -5.1338,-11.46667 -11.46667,-11.46667zM57.33333,126.13333c-3.17053,0 -5.73333,2.5628 -5.73333,5.73333c0,3.17053 2.5628,5.73333 5.73333,5.73333h23.26927c-0.21213,-1.88627 -0.33594,-3.79547 -0.33594,-5.73333c0,-1.93787 0.12381,-3.84707 0.33594,-5.73333z";
            break;
        case 'NUMBERS':
            pathValue = "M31.38776,17.43516l-8.75677,5.95729v7.5362l8.29766,-5.59896h0.45912v26.50547h8.74557v-34.4zM63.06667,34.4c-2.06765,-0.02924 -3.99087,1.05709 -5.03322,2.843c-1.04236,1.78592 -1.04236,3.99474 0,5.78066c1.04236,1.78592 2.96558,2.87225 5.03322,2.843h80.26667c2.06765,0.02924 3.99087,-1.05709 5.03322,-2.843c1.04236,-1.78592 1.04236,-3.99474 0,-5.78066c-1.04236,-1.78592 -2.96558,-2.87225 -5.03322,-2.843zM34.4,68.8c-7.7744,0 -12.97839,4.50219 -12.97839,11.16433v0.13437h7.80495v-0.15677c0,-2.76347 1.99296,-4.71432 4.87109,-4.71432c2.76347,0 4.56875,1.65004 4.56875,4.10964c0,1.97227 -1.25085,3.667 -6.17005,8.21927l-10.58203,9.95495v5.68854h25.46406v-6.62917h-14.12057v-0.44792l5.53177,-5.08386c5.93973,-5.29187 8.11849,-8.59131 8.11849,-12.30651c0,-5.92253 -5.00887,-9.93255 -12.50807,-9.93255zM63.06667,80.26667c-2.06765,-0.02924 -3.99087,1.05709 -5.03322,2.843c-1.04236,1.78592 -1.04236,3.99474 0,5.78066c1.04236,1.78592 2.96558,2.87225 5.03322,2.843h80.26667c2.06765,0.02924 3.99087,-1.05709 5.03322,-2.843c1.04236,-1.78592 1.04236,-3.99474 0,-5.78066c-1.04236,-1.78592 -2.96558,-2.87225 -5.03322,-2.843zM34.28802,114.66667c-7.57373,0 -12.46059,4.06646 -12.57526,10.44766h7.525c0.09173,-2.55707 2.01043,-4.25521 4.8599,-4.25521c2.89533,0 4.69193,1.47848 4.69193,3.85208c0,2.3736 -1.83287,3.93047 -4.61354,3.93047h-4.00885v5.72214h4.00885c3.17053,0 5.08385,1.54244 5.08385,4.05364c0,2.4424 -2.03068,4.10964 -4.97187,4.10964c-3.14187,0 -5.15955,-1.53179 -5.27422,-4.02005h-7.91693c0.2924,6.3984 5.42597,10.55964 13.04557,10.55964c7.98653,0 13.54948,-4.1168 13.54948,-10.02214c0,-4.20253 -2.86756,-7.16111 -7.36823,-7.63698v-0.43672c3.6636,-0.67653 6.17005,-3.63529 6.17005,-7.39062c0,-5.26893 -4.97026,-8.91354 -12.20573,-8.91354zM63.06667,126.13333c-2.06765,-0.02924 -3.99087,1.05709 -5.03322,2.843c-1.04236,1.78592 -1.04236,3.99474 0,5.78066c1.04236,1.78592 2.96558,2.87225 5.03322,2.843h80.26667c2.06765,0.02924 3.99087,-1.05709 5.03322,-2.843c1.04236,-1.78592 1.04236,-3.99474 0,-5.78066c-1.04236,-1.78592 -2.96558,-2.87225 -5.03322,-2.843z";
            break;
        case 'IMAGE':
            pathValue = "M0,17.2v137.6h172v-137.6zM6.88,24.08h158.24v89.44h-36.73812l-24.08,-17.2h-20.3175l-14.05563,-14.05562l-16.74312,3.35937l-14.80813,-22.22562l-31.4975,31.4975zM129,44.72c-8.50594,0 -15.48,6.97406 -15.48,15.48c0,8.50594 6.97406,15.48 15.48,15.48c8.50594,0 15.48,-6.97406 15.48,-15.48c0,-8.50594 -6.97406,-15.48 -15.48,-15.48zM129,51.6c4.78375,0 8.6,3.81625 8.6,8.6c0,4.78375 -3.81625,8.6 -8.6,8.6c-4.78375,0 -8.6,-3.81625 -8.6,-8.6c0,-4.78375 3.81625,-8.6 8.6,-8.6zM37.3025,74.20188l12.71188,19.05437l17.65687,-3.52062l13.46438,13.46437h20.9625l24.08,17.2h38.94187v27.52h-158.24v-43.29562z";
            break;
        case 'TABLE':
            pathValue = "M85.37981,-0.20673c-0.28426,0.05168 -0.56851,0.12921 -0.82692,0.20673h-77.9375c-0.20673,0 -0.41346,0 -0.62019,0c-3.41106,0.3101 -6.02103,3.17849 -5.99519,6.61538v50.85577c-0.38762,1.29207 -0.38762,2.63582 0,3.92788v48.99519c-0.38762,1.29207 -0.38762,2.63582 0,3.92788v51.0625c0,3.64363 2.97176,6.61538 6.61538,6.61538h158.76923c3.64363,0 6.61538,-2.97176 6.61538,-6.61538v-51.68269c0.18089,-0.8786 0.18089,-1.80889 0,-2.6875v-50.23558c0.18089,-0.8786 0.18089,-1.80889 0,-2.6875v-51.47596c0,-3.64363 -2.97176,-6.61538 -6.61538,-6.61538h-78.14423c-0.59435,-0.15505 -1.24038,-0.23257 -1.86058,-0.20673zM13.23077,13.23077h66.15385v39.69231h-66.15385zM92.61538,13.23077h66.15385v39.69231h-66.15385zM13.23077,66.15385h66.15385v39.69231h-66.15385zM92.61538,66.15385h66.15385v39.69231h-66.15385zM13.23077,119.07692h66.15385v39.69231h-66.15385zM92.61538,119.07692h66.15385v39.69231h-66.15385z";
            break;
        case 'SEPARATOR':
            pathValue = "M82.56,6.88v158.24h6.88v-158.24z";
            break;

        default:
            break;
    }

    let svgWidth = "30"
    let svgHeight = "30";

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width={svgWidth} height={svgHeight}
            viewBox="0 0 172 172"
            style={{ fill: '#000000' }}>
            <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strstrokemiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <g fill="#ffffff">
                    <path d={pathValue}></path>;
                </g>
            </g>
        </svg>
    )
}

export default SvgIcons;