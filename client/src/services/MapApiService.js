import axios from 'axios';

var host = window.location.hostname === 'localhost' ? 'http://localhost:8081' : 'https://mappingnorthkorea.com';

export default {
    getAllSectors () {
        return axios.get(host + '/api/sector');
    },
    getAllStates () {
        return axios.get(host + '/api/state');
    },
    updateSector (data) {
        return axios.put(host + '/api/sector/' + data.sector._id, data);
    },
    getAllEvents (amount) {
        return axios.get(host + '/api/event/all/' + amount);
    },
    getEventsBySectorId (id) {
        return axios.get(host + '/api/event/sectorid/' + id);
    },
    getLatestIteration () {
        return axios.get(host + '/api/iteration/latest');
    },
    getCompletedSectorCountByIterationId (id) {
        return axios.get(host + '/api/sector/completed/count/' + id);
    },
    deleteSectorById (id) {
        return axios.delete(host + '/api/sector/' + id);
    },
    splitSectorById (id) {
        return axios.get(host + '/api/sector/split/' + id);
    }
};
