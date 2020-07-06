const { Provinces, Districts, Sectors, Cells, Villages } = require('rwanda');
import Response from '../helpers/Response';

export const getAll = (req, res) => {
  const provinces = Provinces();

  const data = provinces.map((p) => {
    return {
      [p]: Districts(p).map((d) => {
        return {
          [d]: Sectors(p, d).map((s) => {
            return {
              [s]: Cells(p, d, s).map((c) => {
                return { [c]: Villages(p, d, s, c) };
              }),
            };
          }),
        };
      }),
    };
  });

  Response.successMessage(
    res,
    'All provinces, districts, sectors, cells and villages from Rwanda',
    data,
    200
  );
};

export const getProvinces = (req, res) => {
  const data = Provinces();

  Response.successMessage(res, 'All provinces from Rwanda', data, 200);
};

export const getDistricts = (req, res) => {
  try {
    const { p } = req.query;
    const isOption = p;
    const districts = isOption ? Districts(p.toLowerCase()) : Districts();
    const data = districts;

    if (!data) {
      return Response.errorMessage(
        res,
        'Incorrect data. Please make sure you provided correct location name and is found in that area',
        400
      );
    }

    Response.successMessage(
      res,
      isOption
        ? `All districts from province: ${p}`
        : ` All districts from Rwanda`,
      data,
      200
    );
  } catch (error) {
    Response.errorMessage(res, 'Incorrect data provided', 400);
  }
};

export const getSectors = (req, res) => {
  try {
    const { p, d } = req.query;
    const isOption = p && d;
    const sectors = isOption
      ? Sectors(p.toLowerCase(), d.toLowerCase())
      : Sectors();
    const data = sectors;

    if (!data) {
      return Response.errorMessage(
        res,
        'Incorrect data. Please make sure you provided correct location name and is found in that area',
        400
      );
    }

    Response.successMessage(
      res,
      isOption
        ? `All sectors from province: ${p}, district: ${d}`
        : `All sectors from Rwanda`,
      data,
      200
    );
  } catch (error) {
    Response.errorMessage(res, 'Incorrect data provided', 400);
  }
};

export const getCells = (req, res) => {
  try {
    const { p, d, s } = req.query;
    const isOption = p && d && s;
    const cells = isOption
      ? Cells(p.toLowerCase(), d.toLowerCase(), s.toLowerCase())
      : Cells();
    const data = cells;
    if (!data) {
      return Response.errorMessage(
        res,
        'Incorrect data. Please make sure you provided correct location name and is found in that area',
        400
      );
    }
    Response.successMessage(
      res,
      isOption
        ? `All cells from province: ${p}, district: ${d}, sector: ${s}`
        : `All cells from Rwanda`,
      data,
      200
    );
  } catch (error) {
    Response.errorMessage(res, 'Incorrect data provided', 400);
  }
};

export const getVillages = (req, res) => {
  try {
    const { p, d, s, c } = req.query;
    const isOption = p && d && s && c;
    const villages = isOption
      ? Villages(
          p.toLowerCase(),
          d.toLowerCase(),
          s.toLowerCase(),
          c.toLowerCase()
        )
      : Villages();
    const data = villages;

    if (!data) {
      return Response.errorMessage(
        res,
        'Incorrect data. Please make sure you provided correct location name and is found in that area',
        400
      );
    }

    Response.successMessage(
      res,
      isOption
        ? `All villages from province: ${p}, district: ${d}, sector: ${s}, cell: ${c}`
        : `All villages from Rwanda`,
      data,
      200
    );
  } catch (error) {
    Response.errorMessage(res, 'Incorrect data provided', 400);
  }
};
