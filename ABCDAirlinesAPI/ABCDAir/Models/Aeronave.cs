using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ABCDAir.Models
{
    public class Aeronave
    {
        public string PREFIX { get; set; }
        public double MAX_DEPARTURE_WEIGHT { get; set; }
        public double MAX_LANDING_WEIGHT { get; set; }
        public bool ACTIVE { get; set; }
        public string AIRCRAFT_MODEL { get; set; }
    }
}
